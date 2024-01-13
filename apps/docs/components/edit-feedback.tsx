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
      <li className="py-1">
        <a
          className="text-xs text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          href={pageEditUrl}
        >
          Edit this page
        </a>
      </li>
      <li className="py-1">
        <a
          className="text-xs text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
          href={pageFeedbackUrl.toString()}
          target="_blank"
        >
          Give us feedback
        </a>
      </li>
    </ul>
  )
}
