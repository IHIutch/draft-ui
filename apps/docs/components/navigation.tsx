import Link from 'next/link'

export default function Navigation() {
  return (
    <div className="fixed inset-0 z-10 h-14 border-b bg-white shadow-sm">
      <div className="container mx-auto flex h-full items-center">
        <Link href="/" aria-label="Home">
          {/* <Logo className="h-6" /> */}
          Draft UI
        </Link>
      </div>
    </div>
  )
}
