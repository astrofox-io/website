import React from 'react';
import Social from 'components/social';

export default function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <b>ASTROFOX</b>
            <div>&copy; {new Date().getFullYear()} Mike Cao</div>
          </div>
          <div className="col-lg-6">
            <Social />
          </div>
        </div>
      </div>
    </footer>
  );
}
