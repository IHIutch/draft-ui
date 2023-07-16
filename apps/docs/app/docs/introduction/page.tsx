import React from 'react'

export default function Introduction() {
  return (
    <div className="my-12 w-full">
      <div className="prose prose-slate dark:prose-invert mx-auto">
        <div>
          <h1 className="mb-4">Introduction</h1>
          <p className="lead mt-4">
            Copy and paste-able components built with React Aria Components and
            Tailwind CSS
          </p>
          <p>
            Draft UI has been massively inspired by{' '}
            <b className="font-medium">shadcn/ui</b> so I&apos;d encourage you
            to take a look{' '}
            <a href="https://ui.shadcn.com/docs" target="_blank" rel="noopener">
              their introduction page
            </a>
            .
          </p>
          <hr />
          <p>Long story short, Draft UI follows all the same ideals:</p>
          <ul>
            <li>
              Copy and paste components give you full control over the component
              code, it is yours to use.
            </li>
            <li>
              Modify and adapt to your hearts content, using these docs as a
              starting point.
            </li>
            <li>
              These components should be able to be used in any framework that
              supports React.
            </li>
            <li>
              Draft UI is free to use on any personal or commercial projects.
              And if you do,{' '}
              <a
                href="https://twitter.com/draft__ui"
                target="_blank"
                rel="noopener"
              >
                let me know!
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
