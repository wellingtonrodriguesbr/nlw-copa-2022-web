import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>Bolão da Copa do Mundo de 2022</title>
      </Head>
      <body className="bg-gray-900 bg-bg-cover bg-cover bg-no-repeat">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
