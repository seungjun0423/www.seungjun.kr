
import "../styles/globals.css"
import Head from 'next/head'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet='utf-8'></meta>
        <title>SeungJun</title>
        <meta name="description" content="Seungjun Lee Private Web Page" />
        <link rel="shortcut icon"  href="/logo.png" />
        
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
