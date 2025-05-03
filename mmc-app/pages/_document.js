import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* this is a nice font my friend reccomended from adobe */}
        <link rel="stylesheet" href="https://use.typekit.net/pxe4njl.css" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
