import Link from 'next/link'

import SearchComponent from './SearchComponent'

export default function Navigation() {
  return (
    <div className="fixed inset-0 z-10 h-14 border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-full items-center">
        <div>
          <Link href="/" aria-label="Home">
            {/* <Logo className="h-6" /> */}
            Draft UI
          </Link>
        </div>
        <div className="ml-14">
          <Link href="/docs/components" className="font-semibold">
            Components
          </Link>
        </div>
        <div className="pl-4">
          <SearchComponent />
        </div>
      </div>
    </div>
  )
}
