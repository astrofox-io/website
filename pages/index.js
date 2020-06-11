import React from 'react';
import Head from 'next/head';
import Layout from 'components/layout';
import Intro from 'components/intro';
import Features from 'components/features';
import Videos from 'components/videos';

import { getSortedPostsData } from 'lib/posts';

export default function Home({ allPostsData }) {
  return (
    <Layout>
      <Intro />
      <Features />
      <Videos />
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
