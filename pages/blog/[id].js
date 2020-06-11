import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';
import Date from '../../components/date';
import { getAllPostIds, getPostData } from '../../lib/posts';

export default function FirstPost({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div>
        {postData.title}
        <br />
        {postData.id}
        <br />
        <Date dateString={postData.date} />
        <br />
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </div>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}
