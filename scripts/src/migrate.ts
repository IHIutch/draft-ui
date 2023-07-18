import path, { dirname, join } from 'path'

import { findUpSync } from 'find-up'
import { outputFile } from 'fs-extra'
import { Project } from 'ts-morph'

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = dirname(findUpSync('pnpm-lock.yaml')!)
const examplesList: {
  name: string
  variant: string
  text: string
  functionName: string
}[] = []

const main = async () => {
  console.log('Migrating stories')

  process.chdir(path.join(root, 'apps', 'storybook'))

  const docsPath = join(root, 'apps', 'docs')

  const project = new Project({})
  project.addSourceFilesAtPaths('src/**/examples/*.tsx')

  // project.getSourceFiles().forEach((sourceFile) => {
  //   const componentName = sourceFile.getDirectory().getParent()?.getBaseName()
  //   if (!componentName) {
  //     console.log('Component baseName not found')
  //     return
  //   }

  //   const componentVariant = sourceFile.getBaseNameWithoutExtension()
  //   if (!componentVariant) {
  //     console.log(`Variant not found for: ${componentName}`)
  //     return
  //   }

  //   const newPath = join(docsPath, componentName, `${componentVariant}.tsx`)
  //   const fileContents = sourceFile.getText()

  //   // Build the nested JSON structure
  //   if (!nestedJSON[componentName]) {
  //     nestedJSON[componentName] = {}
  //   }

  //   nestedJSON[componentName][componentVariant] = {
  //     fileContents,
  //     importPath: newPath,
  //   }

  //   console.log({ nestedJSON })
  //   // Copy the file to the new path
  //   outputFile(newPath, fileContents)
  // })

  await Promise.all(
    project.getSourceFiles().map(async (sourceFile) => {
      const component = sourceFile.getDirectory().getParent()?.getBaseName()
      if (!component) {
        console.log('Component baseName not found')
        return
      }

      const variant = sourceFile.getBaseNameWithoutExtension()
      if (!variant) {
        console.log(`Variant not found for: ${component}`)
        return
      }

      const fileContents = sourceFile.getText()
      const relPath = join('generated', component, `${variant}.tsx`)
      const newPath = join(root, 'apps', 'docs', relPath)

      examplesList.push({
        name: component,
        variant: variant,
        functionName: variant.charAt(0).toUpperCase() + variant.slice(1),
        text: fileContents,
      })

      return outputFile(newPath, fileContents)
    })
  )

  const dynamicImport = generateDynamicImportFile(examplesList)
  await outputFile(
    join(docsPath, 'generated', 'dynamic-import.tsx'),
    dynamicImport
  )

  return await outputFile(
    join(docsPath, 'generated', 'examples-list.json'),
    JSON.stringify(examplesList, null, 2)
  )
}

main().catch((err) => {
  console.error(err.message)
  process.exit(1)
})

function generateDynamicImportFile(examples: typeof examplesList) {
  return `'use client'

import * as React from 'react'

import { match } from 'ts-pattern'

import { type ExamplesListItem } from '@/types'

export const DynamicImport = (example: Pick<ExamplesListItem, 'name' | 'variant'>) => {
  const Component = match(example)
    ${generateMatchCases(examples)}
    .otherwise(() => null)

  if (!Component) return null

  return (
    <React.Suspense fallback={null}>
      <Component />
    </React.Suspense>
  )
}

function lazyLoad<
  Module extends { [Key in MemberName]: ComponentType<any> },
  MemberName extends keyof Module
>(modulePromise: () => Promise<Module>, memberName: MemberName) {
  return React.lazy(async () => ({
    default: (await modulePromise())[memberName],
  }))
}`
}

function generateMatchCases(examples: typeof examplesList) {
  return examples
    .map((component) => {
      return `.with({name: '${component.name}', variant: '${component.variant}'}, () => lazyLoad(() => import('./${component.name}/${component.variant}'), '${component.functionName}'))`
    })
    .join('\n    ')
}
