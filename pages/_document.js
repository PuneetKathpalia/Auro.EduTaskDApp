import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Crowdfunding DApp built with Next.js and Ethereum" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 