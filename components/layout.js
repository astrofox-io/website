import React from 'react';
import Head from 'next/head';
import Header from './header';
import Footer from './footer';
import Google from './google';

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
        <Google />
      </Head>
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
}
