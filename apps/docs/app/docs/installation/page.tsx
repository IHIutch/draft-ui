import React from 'react'

export default function Installation() {
  const pathAliasConfig = `...
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
...`

  const tailwindConfig = `/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  plugins: [require("tailwindcss-animate")],
}`

  const helperFunction = `import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}`

  return (
    <div className="my-12 w-full">
      <div className="prose prose-slate mx-auto">
        <h1 className="mb-4">Installation</h1>
        <p className="lead mt-4">
          Here&apos;s everything you need to get started
        </p>
        <ol>
          <li>
            <h2>Install Tailwind CSS</h2>
            <p>
              Depending on your project, steps to install Tailwind may vary.
              Check out their{' '}
              <a
                href="https://tailwindcss.com/docs/installation/framework-guides"
                target="_blank"
                rel="noopener"
              >
                installation page
              </a>{' '}
              to for guidance.
            </p>
          </li>
          <li>
            <h2>Install Required Dependencies</h2>
            <pre>
              <code>
                <span className="flex">
                  npm install react-aria-components class-variance-authority
                  clsx tailwind-merge tailwindcss-animate
                </span>
              </code>
            </pre>
            <p>This project requires the following packages:</p>
            <ul>
              <li>
                <a
                  href="https://github.com/adobe/react-spectrum/tree/main/packages/react-aria-components"
                  target="_blank"
                  rel="noopener"
                >
                  React Aria Components
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/joe-bell/cva"
                  target="_blank"
                  rel="noopener"
                >
                  Class Variance Authority
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/lukeed/clsx"
                  target="_blank"
                  rel="noopener"
                >
                  clsx
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/dcastil/tailwind-merge"
                  target="_blank"
                  rel="noopener"
                >
                  tailwind-merge
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/jamiebuilds/tailwindcss-animate"
                  target="_blank"
                  rel="noopener"
                >
                  tailwindcss-animate
                </a>
              </li>
            </ul>
          </li>
          <li>
            <h2>Install Icons</h2>
            <p>
              Draft UI uses{' '}
              <a
                href="https://lucide.dev/guide/packages/lucide-react"
                target="_blank"
                rel="noopener"
              >
                Lucide Icons
              </a>{' '}
              by default. You can use whichever library you prefer, but
              you&apos;ll need to replace the default icons manually.
            </p>
            <pre>
              <code>
                <span className="flex">npm install lucide-react</span>
              </code>
            </pre>
          </li>
          <li>
            <h2>Configure Path Aliases</h2>
            Draft UI uses the path alias <code>@/*</code> by default. If you
            want to use a different alias, you&apos;ll need to update your
            components manually.
            <pre>
              <code>
                <span className="flex">{pathAliasConfig}</span>
              </code>
            </pre>
          </li>
          <li>
            <h2>Configure Tailwind</h2>
            Make sure to include the <code>tailwindcss-animate</code> plugin
            <pre>
              <code>
                <span className="flex">{tailwindConfig}</span>
              </code>
            </pre>
          </li>
          <li>
            <h2>Add a `cn` helper function</h2>
            <p>
              Developed by{' '}
              <a href="https://ui.shadcn.com/" target="_blank" rel="noopener">
                shadcn
              </a>
              , this function combines two useful libraries that makes working
              with Tailwind much easier. It is used heavily with the Draft UI
              components.
            </p>
            <pre>
              <code>
                <span className="flex">{helperFunction}</span>
              </code>
            </pre>
          </li>
          <li>
            <h2>All Done!</h2>
            <p>Now your ready to start building your application!</p>
          </li>
        </ol>
      </div>
    </div>
  )
}
