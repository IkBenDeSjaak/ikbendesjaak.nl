import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <Head>
        <meta charSet='utf-8' />
        <link rel='icon' href='/favicon.png' />
        <meta name='theme-color' content='#000000' />
        <meta
          name='description'
          content='Sjaak Kok is a student web developer from the Netherlands.'
        />
        <meta property='og:title' content='Sjaak Kok' />
        <meta property='og:url' content='https://www.ikbendesjaak.nl' />
        <meta property='og:type' content='website' />
        <meta property='og:image' content='/favicon.png' />
        <meta
          property='og:description'
          content='Sjaak Kok is a student web developer from the Netherlands.'
        />
        <meta name='twitter:card' content='summary' />
        <meta name='twitter:creator' content='@IkBenDeSjaak99' />
        <link rel='apple-touch-icon' href='/favicon.png' />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css'
        />
        <link rel='manifest' href='/manifest.json' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
