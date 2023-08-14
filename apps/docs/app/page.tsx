import { allComponentDocuments } from 'contentlayer/generated'

import CtaSection from '@/components/home-page/cta-section'
import ExampleSection from '@/components/home-page/example-section'
import Navigation from '@/components/navigation'

export default async function Home() {
  const sortedComponents = allComponentDocuments
    .filter((doc) => doc.isComponent === true)
    .sort((a, b) => a.title.localeCompare(b.title))

  return (
    <div className="pt-14">
      <Navigation componentList={sortedComponents} />
      <div className="container mx-auto px-4 pb-8 pt-20">
        <div className="mx-auto max-w-[1024px] text-center">
          <h1 className="text-5xl font-extrabold md:text-7xl">
            Accessibility doesn&apos;t <br className="hidden lg:inline" /> have
            to be hard
          </h1>
          <div className="mx-auto mt-12 max-w-[768px]">
            <p className="text-lg leading-normal text-slate-600 dark:text-slate-400 md:text-2xl">
              Draft UI is a collection of simply designed React components
              focused on making web accessibility as easy as copy & paste.
            </p>
            <CtaSection />
            <p className="mt-32 text-sm text-slate-600 dark:text-slate-400 md:text-base">
              Built with{' '}
              <a
                href="https://react-spectrum.adobe.com/react-aria/react-aria-components.html"
                target="_blank"
                rel="noopener"
                className="font-medium text-black underline dark:text-white"
              >
                React Aria Components
              </a>{' '}
              and{' '}
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener"
                className="font-medium text-black underline dark:text-white"
              >
                Tailwind CSS
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-slate-50 py-24 dark:border-y dark:border-slate-800 dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div>
            <div className="mx-auto text-center">
              <h2 className="text-center text-4xl font-extrabold md:text-5xl">
                25+ Accessible Components
              </h2>
            </div>
          </div>
          <div className="mt-12">
            <ExampleSection />
          </div>
        </div>
      </div>
      <footer className="container mx-auto justify-between px-4 py-8 text-center md:flex md:text-left">
        <p className="mb-4 text-sm text-slate-600 dark:text-slate-400 md:mb-0">
          Built with{' '}
          <a
            href="https://react-spectrum.adobe.com/react-aria/react-aria-components.html"
            target="_blank"
            rel="noopener"
            className="font-medium text-black underline dark:text-white"
          >
            React Aria Components
          </a>{' '}
          and{' '}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener"
            className="font-medium text-black underline dark:text-white"
          >
            Tailwind CSS
          </a>
        </p>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Powered by{' '}
          <a
            href="https://vercel.com/"
            target="_blank"
            rel="noopener"
            className="font-medium text-black underline dark:text-white"
          >
            Vercel
          </a>
        </p>
      </footer>
    </div>
  )
}
