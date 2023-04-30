import clsx from 'clsx'
import { type HTMLAttributes } from 'react'
import { CheckboxGroup, type CheckboxGroupProps } from 'react-aria-components'

const _CheckboxGroup = (props: CheckboxGroupProps) => {
  return <CheckboxGroup className="flex flex-col" {...props} />
}

const _CheckboxGroupContent = (props: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      className={clsx(
        'flex flex-col gap-2',
        'group-[[aria-orientation=horizontal]]:flex-row group-[[aria-orientation=horizontal]]:gap-6',
        'group-[[aria-orientation=vertical]]:flex-col group-[[aria-orientation=vertical]]:gap-2'
      )}
      {...props}
    />
  )
}

export {
  _CheckboxGroup as CheckboxGroup,
  _CheckboxGroupContent as CheckboxGroupContent,
}
