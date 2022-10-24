// pages/_document.tsx
import Document, { Html, Head, Main, NextScript } from "next/document";
export default class CustomDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet='utf-8' />
          <title>SeungJun</title>
          <meta name="description" content="Seungjun Lee Private Web Page" />
          <link rel="shortcut icon"  href="/head.svg" />
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        </Head>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    );
  }
}
