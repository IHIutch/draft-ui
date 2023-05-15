import ComponentExample from '@/components/componentExample'
import ComponentSource from '@/components/componentSource'
import { type NpmCommands } from '@/types/unist'
import { clsx } from 'clsx'
import { useMDXComponent } from 'next-contentlayer/hooks'

import { examples } from './examples'

const components = {
  h1: ({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1
      className={clsx(
        'mt-2 scroll-m-20 text-4xl font-bold tracking-tight',
        className
      )}
      {...props}
    />
  ),
  pre: ({
    className,
    __rawString__,
    __npmCommand__,
    __pnpmCommand__,
    __yarnCommand__,
    __withMeta__,
    // __src__,
    ...props
  }: React.HTMLAttributes<HTMLPreElement> & {
    __rawString__?: string
    __withMeta__?: boolean
    __src__?: string
  } & NpmCommands) => {
    return (
      <>
        <pre
          className={clsx(
            'not-prose',
            'mb-4 mt-6 overflow-x-auto rounded-lg border border-slate-900 bg-slate-900 px-2 py-4 dark:border-slate-700 dark:bg-black',
            className
          )}
          {...props}
        />
        {__rawString__ && !__npmCommand__ && (
          <button
            value={__rawString__}
            // src={__src__}
            className={clsx(
              'absolute right-4 top-4 border-none text-slate-300 opacity-50 hover:bg-transparent hover:opacity-100',
              __withMeta__ && 'top-20'
            )}
          />
        )}
        {__npmCommand__ && __yarnCommand__ && __pnpmCommand__ && (
          <button
            // commands={{
            //   __npmCommand__,
            //   __pnpmCommand__,
            //   __yarnCommand__,
            // }}
            className={clsx(
              'absolute right-4 top-4 border-none text-slate-300 opacity-50 hover:bg-transparent hover:opacity-100',
              __withMeta__ && 'top-20'
            )}
          />
        )}
      </>
    )
  },
  code: ({ className, ...props }: React.HTMLAttributes<HTMLElement>) => (
    <code
      className={clsx(
        'relative rounded bg-slate-100 px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-slate-900 dark:bg-slate-800 dark:text-slate-400',
        className
      )}
      {...props}
    />
  ),
  ComponentSource,
  ComponentExample,
  ...examples,
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <div className="mdx">
      <Component components={components} />
    </div>
  )
}
