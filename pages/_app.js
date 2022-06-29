import './global.scss'
import './themes.scss'
import './pages.scss'

import Layout from '../components/Layout/Layout'

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}