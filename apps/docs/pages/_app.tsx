import '@/styles/mdx.css'
import '@/styles/globals.css'

import { SSRProvider } from 'react-aria-components'

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  )
}
