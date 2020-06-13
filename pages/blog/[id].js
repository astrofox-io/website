import React from 'react';
import Layout from 'components/layout';
import Date from 'components/date';
import { getAllPostIds, getPostData } from 'lib/posts';

export default function BlogPost({ postData }) {
  return (
    <Layout>
      <article className="blog-post row justify-content-center">
        <div className="col-lg-8">
          <h1>{postData.title}</h1>
          <div className="blog-header">
            {postData.author} / <Date dateString={postData.date} />
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
