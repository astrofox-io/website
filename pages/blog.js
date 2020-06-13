import React from 'react';
import Link from 'next/link';
import Layout from 'components/layout';
import Date from 'components/date';
import { getSortedPostsData } from '../lib/posts';

export default function Blog({ allPostsData }) {
  return (
    <Layout title="Blog">
      <h1 className="center">Astroblog</h1>
      <div className="center mb-5">The latest updates on Astrofox</div>

      {allPostsData.map(({ id, date, title, excerpt }) => (
        <article key={id} className="mb-5">
          <Date dateString={date} />
          <h3>
            <Link href={`/blog/${id}`}>
              <a>{title}</a>
            </Link>
          </h3>
        </article>
      ))}
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
