import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html style={{scrollBehavior:'smooth'}}>
      <Head> 
        <meta charset="utf-8" />
        <link rel="icon" href="/favicon.png" />
        {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
        <meta name="theme-color" content="#000000" />
        <meta
            name="description"
            content="Sjaak Kok is a student web developer from the Netherlands."
        />
        <meta property="og:title" content="Sjaak Kok" />
        <meta property="og:url" content="https://www.ikbendesjaak.nl" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/favicon.png" />
        <meta
            property="og:description"
            content="Sjaak Kok is a student web developer from the Netherlands."
        />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@IkBenDeSjaak99" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        {/* <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link
            href="https://fonts.googleapis.com/css?family=Rubik&display=swap"
            rel="stylesheet"
        />

        <link
            href="https://fonts.googleapis.com/css?family=Playfair+Display&display=swap"
            rel="stylesheet"
        />
        <link
            href="https://fonts.googleapis.com/css?family=PT+Serif|Raleway&display=swap"
            rel="stylesheet"
        />

        <link
            href="https://fonts.googleapis.com/css?family=Questrial&display=swap"
            rel="stylesheet"
        /> */}
        {/* <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@400;500;600;700&display=swap"
            rel="stylesheet"
        /> */}
        <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
        />
        {/* <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
        /> */}
        <link rel="manifest" href="/manifest.json" />
        {/* <title>Sjaak Kok</title> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}