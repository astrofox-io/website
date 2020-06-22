import React, { useState } from 'react';
import Link from 'next/link';
import PlayButton from '../assets/play-circle.svg';
import Video from './video';

const VIDEO_ID = 'f6ujpgm1zSM';

export default function Intro() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section id="intro" className="center row justify-content-center">
      <div className="col col-lg-8 col-md-10">
        <h1>Make awesome music videos</h1>
        <Link href="/download">
          <a id="download-button-intro" className="button ga">
            Download Astrofox
          </a>
        </Link>
        <div
          id="video-screenshot"
          className="screenshot pt-5 pb-5 ga"
          onClick={() => setShowVideo(true)}
        >
          <img src="/images/screenshot.jpg" />
          <PlayButton id="video-play-button" />
        </div>
        <h2>Turn music into visual magic</h2>
        <p>
          Astrofox is a powerful motion graphics tool that lets you create amazing audio reactive
          music videos. Combine music with text, images, animations and effects to create stunning,
          unique visuals. Generate high-definition videos to share your work with the world.
        </p>
      </div>
      {showVideo && (
        <div className="video-overlay" onClick={() => setShowVideo(false)}>
          <div className="video-close" onClick={() => setShowVideo(false)}>
            ✕
          </div>
          <Video video={VIDEO_ID} width={1920} height={1080} aspect="wide" />
        </div>
      )}
    </section>
  );
}
