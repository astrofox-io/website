import React from 'react';
import Layout from 'components/layout';
import Intro from 'components/intro';
import Features from 'components/features';
import Videos from 'components/videos';

export default function Home() {
  return (
    <Layout>
      <Intro />
      <Features />
      <Videos />
    </Layout>
  );
}
