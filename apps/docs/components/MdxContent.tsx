import ComponentExample from '@/components/ComponentExample'
import ComponentSource from '@/components/ComponentSource'
import { clsx } from 'clsx'
import { useMDXComponent } from 'next-contentlayer/hooks'

import examples from './examples'

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
  ComponentSource,
  ComponentExample,
  ...examples,
}

interface MdxProps {
  code: string
}

export function MdxContent({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return <Component components={components} />
}
