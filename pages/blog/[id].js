import React from 'react';
import Layout from 'components/layout';
import Date from 'components/date';
import { getAllPathIds, getHtmlContent, POSTS_DIR } from 'lib/content';

export default function BlogPost({ postData }) {
  return (
    <Layout>
      <article className="blog-post row justify-content-center">
        <div className="col-lg-8">
          <h1>{postData.title}</h1>
          <div className="blog-header">
            Posted <Date dateString={postData.date} /> by {postData.author}
          </div>
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
          />
        </div>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const paths = getAllPathIds(POSTS_DIR);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postData = await getHtmlContent(POSTS_DIR, params.id);
  return {
    props: {
      postData,
    },
  };
}
