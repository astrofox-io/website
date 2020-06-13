import React from 'react';
import Layout from 'components/layout';
import Block from 'components/block';
import Discord from 'assets/discord.svg';
import Reddit from 'assets/reddit.svg';

export default function Support() {
  return (
    <Layout title="Support">
      <section className="container">
        <div className="row center justify-content-center">
          <div className="col-lg-6">
            <h1>Support</h1>
            <p>
              Come join our community to get help with issues, discuss ideas and share your
              feedback.
            </p>
            <div className="row pt-5 justify-content-between">
              <Block title="Discord chat" icon={<Discord />} href="https://discord.gg/wJ6pyMZ" />
              <Block title="Reddit" icon={<Reddit />} href="https://www.reddit.com/r/astrofox/" />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
