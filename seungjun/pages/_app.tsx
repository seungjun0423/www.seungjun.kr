
import "../styles/globals.css"
import Head from 'next/head'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>SeungJun</title>
        <meta name="description" content="Seungjun Lee Private Web Page" />
        <link rel="shortcut icon"  href="/logo.png" />
        <script>
          (function(j,ennifer) {
          j['dmndata']=[];j['jenniferFront']=function(args){window.dmndata.push(args)};
          j['dmnaid']=ennifer;j['dmnatime']=new Date();j['dmnanocookie']=false;j['dmnajennifer']='JENNIFER_FRONT@INTG';
        }(window, 'efce11dc'));
        </script>
        <script async src="https://d-collect.jennifersoft.com/efce11dc/demian.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
