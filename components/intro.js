import React, { useState } from 'react';
import Link from 'next/link';
import PlayButton from '../assets/play-circle.svg';
import Video from './video';

export default function Intro() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section id="intro" className="center row justify-content-center">
      <div className="col col-lg-8 col-md-10">
        <h1>Make awesome music videos</h1>
        <p>
          Astrofox is a powerful motion graphics tool that lets you create amazing audio reactive
          music videos. Combine your music with text, images, effects, and animations to create
          stunning, unique visuals. Export high-definition videos to share on video and social media
          sites to gain new fans.
        </p>
        <Link href="/download">
          <a className="button">Download Astrofox</a>
        </Link>
        <div className="screenshot pt-5">
          <img src="/images/screenshot.jpg" />
          <PlayButton onClick={() => setShowVideo(true)} />
        </div>
      </div>
      {showVideo && (
        <div className="video-overlay" onClick={() => setShowVideo(false)}>
          <div className="video-close" onClick={() => setShowVideo(false)}>
            ✕
          </div>
          <Video video="9bZkp7q19f0" width={1920} height={1080} aspect="wide" />
        </div>
      )}
    </section>
  );
}
