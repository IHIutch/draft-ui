type Props = {
  title: string
  contentPath: string
}

export default function EditFeedbackLinks({ title, contentPath }: Props) {
  const pageEditUrl = `https://github.com/IHIutch/draft-ui/tree/main/apps/docs/content/${contentPath}`
  const pageFeedbackUrl = new URL(
    `https://github.com/IHIutch/draft-ui/issues/new`,
  )
  pageFeedbackUrl.searchParams.set('title', `Feedback for “${title}”`)
  // Is this the right label to set? Do we need to make a new label for this?
  pageFeedbackUrl.searchParams.set('labels', 'documentation')

  return (
    <ul className="mt-3">
      <LinkItem href={pageEditUrl}>Edit this page</LinkItem>
      <LinkItem href={pageFeedbackUrl.toString()}>Give us feedback</LinkItem>
    </ul>
  )
}

const LinkItem = ({
  href,
  children,
}: {
  href: string
  children?: React.ReactNode
}) => (
  <li className="">
    <a
      className={`block rounded-sm py-1 text-sm text-slate-600 no-underline transition hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 dark:text-slate-400 dark:hover:text-white dark:focus-visible:ring-slate-400 dark:focus-visible:ring-offset-slate-900`}
      href={href}
    >
      {children}
    </a>
  </li>
)
