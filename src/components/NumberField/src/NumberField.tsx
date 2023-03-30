import { Input } from '../../Input/src/Input'
import { type ClassValue } from 'class-variance-authority/dist/types'
import clsx from 'clsx'
import { Button } from 'react-aria-components/src/Button'
import { Group } from 'react-aria-components/src/Group'
import { NumberField } from 'react-aria-components/src/NumberField'

// export interface _MenuProps
//   extends VariantProps<typeof buttonVariants> {
//   className?: ClassValue
// }

const _NumberField = (props) => {
  return <NumberField {...props} />
}

const _NumberInputStepper = (props) => {
  return (
    <Group
      className="absolute top-0 right-0 z-10 m-px flex h-[calc(100%-2px)] w-6 flex-col"
      {...props}
    />
  )
}

const _NumberInput = (props) => {
  return <Input className="pr-6" {...props} />
}

const _NumberIncrementStepper = (props) => {
  return (
    <Button
      slot="increment"
      className={clsx(
        'flex flex-1 select-none items-center justify-center border-l border-slate-300 leading-none',
        'rounded-tr-md',
        'transition-colors duration-100 data-[pressed]:bg-slate-100'
      )}
      {...props}
    />
  )
}

const _NumberDecrementStepper = (props) => {
  return (
    <Button
      slot="decrement"
      className={clsx(
        'flex flex-1 select-none items-center justify-center border-l border-slate-300 leading-none',
        'rounded-br-md border-t',
        'transition-colors duration-100 data-[pressed]:bg-slate-100'
      )}
      {...props}
    />
  )
}

export {
  _NumberField as NumberField,
  _NumberInput as NumberInput,
  _NumberInputStepper as NumberInputStepper,
  _NumberIncrementStepper as NumberIncrementStepper,
  _NumberDecrementStepper as NumberDecrementStepper,
}
