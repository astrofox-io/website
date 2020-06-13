import React from 'react';
import Layout from 'components/layout';

export default function Custom404() {
  return (
    <Layout title="404 - Page Not Found">
      <div className="row">
        <div className="col center">
          <h1 className="center">404</h1>
          <img src="/images/logo.png" width={200} />
          <h2>PAGE NOT FOUND</h2>
        </div>
      </div>
    </Layout>
  );
}
