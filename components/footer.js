import React from 'react';
import Social from 'components/social';

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-6">
            <b>ASTROFOX</b> &copy; <a href="https://mikecao.com">Mike Cao</a>
          </div>
          <div className="col-12 col-lg-6">
            <Social />
          </div>
        </div>
      </div>
    </footer>
  );
}
