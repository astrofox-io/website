import React from 'react';
import fetch from 'node-fetch';
import yaml from 'yaml';
import Layout from 'components/layout';
import Block from 'components/block';
import Apple from 'assets/apple.svg';
import Windows from 'assets/windows.svg';

const URL = 'https://files.astrofox.io/file/astrofox/download';

export default function Download({ win, mac }) {
  return (
    <Layout title="Download">
      <section className="center row justify-content-center">
        <div className="col-lg-8">
          <h1>Download Astrofox</h1>
          <h3>Choose your OS</h3>
          <div className="row pt-5 justify-content-between">
            <Block icon={<Apple />}>
              <div className="mt-5 mb-5">macOS 10.10+ 64-bit</div>
              <a href={`${URL}/${mac.path}`} className="button ga" id="download-button-mac">
                {`Download v${mac.version}`}
              </a>
            </Block>
            <Block icon={<Windows />}>
              <div className="mt-5 mb-5">Windows 7+ 64-bit</div>
              <a href={`${URL}/${win.path}`} className="button ga" id="download-button-win">
                {`Download v${win.version}`}
              </a>
            </Block>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const win = yaml.parse(await fetch(`${URL}/latest.yml`).then(response => response.text()));
  const mac = yaml.parse(await fetch(`${URL}/latest-mac.yml`).then(response => response.text()));

  return {
    props: {
      win,
      mac,
    },
  };
}
