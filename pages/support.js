import React from 'react';
import Layout from 'components/layout';
import Block from 'components/block';
import Discord from 'assets/discord.svg';
import Reddit from 'assets/reddit.svg';
import config from 'config/site.json';

export default function Support() {
  return (
    <Layout title="Support">
      <section id="support" className="container">
        <div className="row center justify-content-center">
          <div className="col-lg-8">
            <h1>Support</h1>
            <p>
              Come join our community to get help with issues, discuss ideas and share your
              feedback.
            </p>
            <div className="row pt-5 justify-content-between">
              <Block title="Discord chat" icon={<Discord />} href={config.discordUrl} />
              <Block title="Reddit forum" icon={<Reddit />} href={config.redditUrl} />
            </div>
          </div>
        </div>
      </section>
      <section id="faq" className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h1 className="center">FAQ</h1>
            <ol>
              <li>How much does Astrofox cost?</li>
              <p>
                Astrofox is completely <b>FREE</b> to use.
              </p>
              <li>What do I need to run Astrofox?</li>
              <p>
                Astrofox runs on Windows 7+, MacOS 10.10+ and Linux (Ubuntu 12.04+, Fedora 21,
                Debian 8). You will need a video card capable of running
                <a href="https://get.webgl.org/" target="_blank">
                  {` WebGL`}
                </a>
                .
              </p>
              <li>How do I save videos of my work?</li>
              <p>
                Astrofox has a built-in video renderer. After you have loaded your audio file and
                selected your visuals, simply click <i>Save Video</i> from the file menu.
              </p>
            </ol>
          </div>
        </div>
      </section>
    </Layout>
  );
}
