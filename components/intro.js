import React from 'react';
import Link from 'next/link';
import PlayButton from '../assets/play-circle.svg';

export default function Intro() {
  return (
    <section className="intro row justify-content-center">
      <div className="col-lg-8">
        <h1>Make awesome music videos</h1>
        <p>
          Astrofox is a powerful motion graphics tool that lets you create amazing audio reactive
          music videos. Combine your music with text, images, effects, and animations to create
          stunning, unique visuals. Export high-definition videos to share on video and social media
          sites to gain new fans.
        </p>
        <p>
          <Link href="/download">
            <div className="button">Download Astrofox</div>
          </Link>
        </p>
        <p>
          <div className="screenshot">
            <img src="/images/screenshot.jpg" />
            <PlayButton />
          </div>
        </p>
      </div>
    </section>
  );
}
