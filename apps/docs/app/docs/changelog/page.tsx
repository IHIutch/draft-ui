import React from 'react'

export default function Changelog() {
  return (
    <div className="my-12 w-full">
      <div className="prose prose-slate mx-auto dark:prose-invert">
        <div>
          <h1 className="mb-4">Changelog</h1>
          <p className="lead mt-4">
            Stay up to date on the latest changes and updates
          </p>
        </div>
        <div className="spacing-12">
          <div>
            <h2>August 2023</h2>
            <ul>
              <li>Doc updates</li>
              <li>Update React imports in components</li>
              <li>
                Add lots of new examples and variants:
                <ul>
                  <li>
                    <code>Button</code> variants
                  </li>
                  <li>
                    <code>Checkbox</code> variants
                  </li>
                  <li>
                    <code>ComboBox</code> examples
                  </li>
                  <li>
                    <code>DateInput</code> variants
                  </li>
                  <li>
                    <code>Input</code> variants
                  </li>
                  <li>
                    <code>Menu</code> examples
                  </li>
                  <li>
                    <code>Meter</code> examples
                  </li>
                  <li>
                    <code>NumberField</code> examples
                  </li>
                  <li>
                    <code>Radio</code> variants
                  </li>
                  <li>
                    <code>Switch</code> examples
                  </li>
                  <li>
                    <code>Tooltip</code> examples
                  </li>
                </ul>
              </li>
              <li>
                Fixed a bunch of component layouts
                <ul>
                  <li>
                    Add <code>flex-col</code> to <code>Modal</code>
                  </li>
                  <li>
                    Add <code>w-full</code> to <code>NumberField</code>
                  </li>
                  <li>
                    Remove verbose classes from <code>RadioGroup</code>
                  </li>
                  <li>
                    Add <code>w-full</code> to <code>Select</code>
                  </li>
                  <li>
                    Remove <code>h-full</code> from vertical <code>Slider</code>{' '}
                    variant
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <h2>July 2023</h2>
            <p>
              Using <code>react-aria-components@1.0.0-alpha.5</code>
            </p>
            <ul>
              <li>We have a logo and a homepage!</li>
              <li>
                Docs updated; content pages are live including installation
                instructions
              </li>
              <li>Components and the rest of the site support dark mode.</li>
              <li>
                Tabs now use <code>--border-width</code> variable to avoid
                issues with nested tabs
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
