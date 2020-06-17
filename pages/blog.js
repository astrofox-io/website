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
        <article key={id} className="row mb-5">
          <div className="col-2">
            <Date dateString={date} />
          </div>
          <div className="col-8">
            <Link href={`/blog/${id}`}>
              <a>
                <b>{title}</b>
              </a>
            </Link>
          </div>
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
