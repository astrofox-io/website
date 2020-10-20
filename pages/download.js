import React from 'react';
import fetch from 'node-fetch';
import yaml from 'yaml';
import Layout from 'components/layout';
import Block from 'components/block';
import Apple from 'assets/apple.svg';
import Windows from 'assets/windows.svg';
import Linux from 'assets/linux.svg';
import Github from 'assets/github.svg';
import ArrowDown from 'assets/arrow-to-bottom.svg';
import { downloadUrl, githubUrl } from 'config/site.json';

export default function Download({ win, mac, linux, git }) {
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
          <div className="row pt-5 justify-content-center">
            <Item title="Source code" icon={<Github />} type="git" path={githubUrl} />
          </div>
        </div>
      </section>
    </Layout>
  );
}

const Item = ({ title, icon, type, version, path }) => {
  let href = `${downloadUrl}/${path}`;
  let tag = `v${version}`;

  if (type === 'mac') {
    href = `${downloadUrl}/${path.replace('-mac.zip', '.dmg')}`;
  }

  if (type === 'git') {
    href = path;
    tag = 'source';
  }

  return (
    <Block icon={icon} className="col-sm-12">
      <div className="mt-5 mb-5">{title}</div>
      <a
        href={href}
        className={`button mb-5 umami--click--download-button-${type}`}
        id={`download-button-${type}`}
        target="_blank"
      >
        <ArrowDown className="button-icon" />
        <span>Download {tag}</span>
      </a>
    </Block>
  );
};

export async function getStaticProps() {
  const win = yaml.parse(
    await fetch(`${downloadUrl}/latest.yml`).then(response => response.text()),
  );
  const mac = yaml.parse(
    await fetch(`${downloadUrl}/latest-mac.yml`).then(response => response.text()),
  );
  const linux = yaml.parse(
    await fetch(`${downloadUrl}/latest-linux.yml`).then(response => response.text()),
  );

  return {
    props: {
      win,
      mac,
      linux,
    },
  };
}
