import React from 'react';
import Head from 'next/head';
import Layout from 'components/layout';
import { getSortedPostsData } from '../lib/posts';

export default function Blog({ allPostsData }) {
  return (
    <Layout>
      <Head>
        <title>Astrofox</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="title">Hello.</h1>

        {allPostsData.map(({ id, date, title }) => (
          <li key={id}>
            {title}
            <br />
            {id}
            <br />
            {date}
          </li>
        ))}
      </main>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
