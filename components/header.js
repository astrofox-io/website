import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header id="header" className="container">
      <div className="row">
        <div className="col-lg-6 col-sm-12">
          <div className="header__title">
            <Link href="/">
              <a>
                <img src="/images/title.png" height={50} />
              </a>
            </Link>
          </div>
        </div>
        <nav className="col-lg-6 col-sm-12">
          <ul className="header__links">
            <li>
              <Link href="/download">
                <a>Download</a>
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
          </ul>
        </nav>
      </div>
    </header>
  );
}
