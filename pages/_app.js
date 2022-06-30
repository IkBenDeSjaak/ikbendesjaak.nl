import Head from 'next/head'

import './global.scss'
import './themes.scss'
import './pages.scss'

import Layout from '../components/Layout/Layout'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sjaak Kok</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
