import React from 'react'

export default function About() {
  return (
    <div className="my-12 w-full">
      <div className="prose prose-slate mx-auto">
        <h1>About</h1>
        <p className="lead">
          The purpose of Draft UI is to make building accessible applications
          faster and easier than ever
        </p>
        <h2>Make it Your Own</h2>
        <p>
          I&apos;ve intentionally avoided using the Tailwind config and
          arbitrary values as much as possible. While you are welcome to copy
          and paste these components and use them in your projects as-is, the
          goal of this project is to get your projects up and running as quickly
          as possible without having to worry about accessibility and
          interactivity.
        </p>
        <h2>Special Thanks</h2>
        <p>
          There are many OSS projects who have inspired and power the backbone
          of this project. This project is a combination of other folks really
          hard work so I&apos;d like to recognize and thank them:
        </p>
        <ul className="text-slate-">
          <li>
            <p>
              <b>
                <a href="https://ui.shadcn.com" target="_blank" rel="noopener">
                  shadcn/ui
                </a>
              </b>
              : Without the inspiration of shadcn/ui, this project would not
              exist. The idea to create a beautiful, copy and paste library
              opened my eyes on how to make a useful tool without having to
              worry about bundling, distribution, and a bunch of other things I
              don&apos;t know much about.
            </p>
          </li>
          <li>
            <p>
              <b>
                <a
                  href="https://react-spectrum.adobe.com/react-aria/react-aria-components.html"
                  target="_blank"
                  rel="noopener"
                >
                  React Aria Components
                </a>
              </b>
              : The backbone of this project. I consider React Aria to be the de
              facto accessibility library on the web. Creating React Aria
              Components has made it easier than ever to build UI that is
              functional and accessible to all users.
            </p>
            <p>
              I&apos;d especially like to acknowledge{' '}
              <a
                href="https://twitter.com/devongovett"
                target="_blank"
                rel="noopener"
              >
                @devongarret
              </a>{' '}
              who has been representing React Aria on Twitter and has been very
              communicative about the team&apos;s progress and quick to respond
              to feedback.
            </p>
          </li>
          <li>
            <p>
              <b>
                <a href="https://chakra-ui.com" target="_blank" rel="noopener">
                  Chakra UI
                </a>
              </b>
              : Although not directly involved with this project, I leveraged
              many of their styling decisions where I wanted additional
              flexibility with components. I also heavily relied on their naming
              to conventions to compose components.
            </p>
            <p>
              I&apos;ve also been heavily combing through their repo to better
              understand how their Storybook and Docs are working together.
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}
