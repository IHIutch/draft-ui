import CtaSection from '@/components/homePage/cta-section'
import ExampleSection from '@/components/homePage/example-section'
import Navigation from '@/components/Navigation'
import { getDocsMetadata } from '@/lib/server'

export default async function Home() {
  const docsMetadata = await getDocsMetadata()
  const componentList = docsMetadata
    .filter((doc) => doc.frontmatter.isComponent === true)
    .sort((a, b) => a.frontmatter.title.localeCompare(b.frontmatter.title))

  return (
    <div className="pt-14">
      <Navigation componentList={componentList} />
      <div className="container mx-auto px-4 pb-8 pt-20">
        <div className="mx-auto max-w-[1024px] text-center">
          <h1 className="text-7xl font-extrabold">
            Accessibility doesn&apos;t <br className="hidden lg:inline" /> have
            to be hard
          </h1>
          <div className="mx-auto mt-12 max-w-[768px] text-2xl ">
            <p className="leading-normal text-slate-600">
              Draft UI is a collection of simply designed React components
              focused on making web accessibility as easy as copy & paste.
            </p>
            <CtaSection />
            <p className="mt-32 text-base text-slate-600">
              Built with{' '}
              <a
                href="https://react-spectrum.adobe.com/react-aria/react-aria-components.html"
                target="_blank"
                rel="noopener"
                className="font-medium text-black underline"
              >
                React Aria Components
              </a>{' '}
              and{' '}
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener"
                className="font-medium text-black underline"
              >
                Tailwind CSS
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="bg-slate-50 py-24">
        <div className="container mx-auto px-4">
          <div>
            <div className="mx-auto text-center">
              <h2 className="text-center text-5xl font-extrabold">
                25+ Accessible Components
              </h2>
              {/* <p className="mt-4 text-xl text-slate-700">
                Ready to copy and paste
              </p> */}
            </div>
          </div>
          <div className="mt-12">
            <ExampleSection />
          </div>
        </div>
      </div>
      <footer className="container mx-auto flex justify-between px-4 py-8">
        <p className="text-sm text-slate-600">
          Built with{' '}
          <a
            href="https://react-spectrum.adobe.com/react-aria/react-aria-components.html"
            target="_blank"
            rel="noopener"
            className="font-medium text-black underline"
          >
            React Aria Components
          </a>{' '}
          and{' '}
          <a
            href="https://tailwindcss.com/"
            target="_blank"
            rel="noopener"
            className="font-medium text-black underline"
          >
            Tailwind CSS
          </a>
        </p>
        <p className="text-sm text-slate-600">
          Powered by{' '}
          <a
            href="https://vercel.com/"
            target="_blank"
            rel="noopener"
            className="font-medium text-black underline"
          >
            Vercel
          </a>
        </p>
      </footer>
    </div>
  )
}
