type MinimalPost = {
  title: string
  slug: string
}

type Props = {
  post: MinimalPost
}

export default function EditFeedbackLinks({ post }: Props) {
  const pageEditUrl = `https://github.com/IHIutch/draft-ui/tree/main/apps${post.slug}`
  const pageFeedbackUrl = new URL(
    `https://github.com/IHIutch/draft-ui/issues/new`,
  )
  pageFeedbackUrl.searchParams.set('title', `Feedback for “${post.title}”`)
  // Is this the right label to set? Do we need to make a new label for this?
  pageFeedbackUrl.searchParams.set('labels', 'documentation')

  return (
    <span className="flex flex-col space-y-2 pt-6">
      <a
        className="text-xs text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
        href={pageEditUrl}
      >
        Edit this page
      </a>
      <a
        className="mt-6 text-xs text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white"
        href={pageFeedbackUrl.toString()}
        target="_blank"
      >
        Give us feedback
      </a>
    </span>
  )
}
