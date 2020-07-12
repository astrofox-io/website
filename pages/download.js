import React from 'react';
import fetch from 'node-fetch';
import yaml from 'yaml';
import Layout from 'components/layout';
import Block from 'components/block';
import Apple from 'assets/apple.svg';
import Windows from 'assets/windows.svg';
import Linux from 'assets/linux.svg';

const URL = 'https://files.astrofox.io/download';

export default function Download({ win, mac, linux }) {
  return (
    <Layout title="Download">
      <section className="row justify-content-center">
        <div className="col-lg-12 center">
          <h1>Download Astrofox</h1>
          <h3>Choose your OS</h3>
          <div className="row pt-5 justify-content-between">
            <Item title="macOS 64-bit" icon={<Apple />} type="mac" {...mac} />
            <Item title="Windows 64-bit" icon={<Windows />} type="win" {...win} />
            <Item title="Linux 64-bit" icon={<Linux />} type="linux" {...linux} />
          </div>
        </div>
      </section>
    </Layout>
  );
}

const Item = ({ title, icon, type, version, path }) => (
  <Block icon={icon}>
    <div className="mt-5 mb-5">{title}</div>
    <a href={`${URL}/${path}`} className="button ga" id={`download-button-${type}`}>
      {`Download v${version}`}
    </a>
  </Block>
);

export async function getStaticProps() {
  const win = yaml.parse(await fetch(`${URL}/latest.yml`).then(response => response.text()));
  const mac = yaml.parse(await fetch(`${URL}/latest-mac.yml`).then(response => response.text()));
  const linux = yaml.parse(
    await fetch(`${URL}/latest-linux.yml`).then(response => response.text()),
  );

  return {
    props: {
      win,
      mac,
      linux,
    },
  };
}
