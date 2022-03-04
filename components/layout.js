import React from 'react';
import Head from 'next/head';
import Header from './header';
import Footer from './footer';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>Astrofox{title && ` - ${title}`}</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap"
          rel="stylesheet"
        />
        {typeof window !== 'undefined' && process.env.NODE_ENV === 'production' && (
          <script
            async
            defer
            data-website-id="7f5a82ce-79e7-452d-b30b-5b65790ac62a"
            src="https://app.umami.is/script.js"
          />
        )}
      </Head>
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
}
