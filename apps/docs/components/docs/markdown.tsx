import React from 'react'

import { useMDXComponent } from 'next-contentlayer/hooks'

import { type DocumentTypes } from '@/.contentlayer/generated'
import ComponentExample from '@/components/ComponentExample'
import ComponentSource from '@/components/ComponentSource'

type MarkdownProps = {
  doc: DocumentTypes
}

export default function Markdown(props: MarkdownProps) {
  const { doc } = props
  const MDXComponent = useMDXComponent(doc.body.code)
  return (
    <div>
      <MDXComponent
        components={{
          ComponentSource,
          ComponentExample,
          //   ComponentExample: ({ name }: any) =>
          //     match(doc)
          //       .with(
          //         {
          //           type: 'Component',
          //           examples: P.when((val: ExamplesListItem[]) =>
          //             val.map((v) => v.variant).includes(name)
          //           ),
          //         },
          //         ({ examples }) => (
          //           <ComponentExample
          //             example={examples.find((e: any) => e.variant === name)}
          //           />
          //         )
          //       )
          //       .otherwise(() => {
          //         throw new Error(
          //           `Example named "${name}" for the ${doc.title} component was not found. Ensure that you have added the story to the storybook of the component.`
          //         )
          //       }),
        }}
      />
    </div>
  )
}
