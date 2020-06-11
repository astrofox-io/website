import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="container">
      <div className="header row">
        <div className="col-xs-12 col-lg-6">
          <div className="header__title">
            <div className="header__logo">
              <img src="/images/logo.png" width={36} height={36} />
            </div>
            <div className="header__name">
              <Link href="/">Astrofox</Link>
            </div>
          </div>
        </div>
        <nav className="col-xs-12 col-lg-6">
          <ul className="header__links">
            <li>
              <Link href="/download">Download</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/support">Support</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
