import * as React from 'react'

export function ListStepper({ children }: { children: React.ReactNode }) {
  return (
    <ol className="list-none space-y-16 pl-12 [counter-reset:step]">
      {children}
    </ol>
  )
}

export function ListStep({ children }: { children: React.ReactNode }) {
  return (
    <li className="relative [counter-increment:step] before:absolute before:-left-12 before:flex before:h-8 before:w-8 before:items-center before:justify-center before:rounded-full before:bg-slate-100 before:font-semibold before:leading-none before:text-black before:content-[counter(step)] after:absolute after:-bottom-10 after:-left-8 after:top-14 after:border-l after:border-l-slate-200 last:after:border-l-0 dark:before:bg-slate-800 dark:before:text-slate-100 dark:after:border-l-slate-800">
      {children}
    </li>
  )
}
