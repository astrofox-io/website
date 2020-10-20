import React from 'react';
import Link from 'next/link';
import Github from 'assets/github.svg';

export default function Header() {
  return (
    <header id="header" className="container">
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <div className="header-title justify-content-center justify-content-lg-start">
            <Link href="/">
              <a>
                <img src="/images/title.png" height={50} />
              </a>
            </Link>
          </div>
        </div>
        <nav className="col-lg-6 col-sm-12">
          <ul className="header-links justify-content-center justify-content-lg-end">
            <li>
              <Link href="/download">
                <a>Download</a>
              </Link>
            </li>
            <li>
              <Link href="/docs">
                <a>Docs</a>
              </Link>
            </li>
            <li>
              <Link href="/support">
                <a>Support</a>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li>
              <a
                href="https://github.com/astrofox-io/astrofox"
                className="umami--click--github-button"
                target="_blank"
              >
                <Github />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
