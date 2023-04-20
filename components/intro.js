import React, { useState } from 'react';
import Link from 'next/link';
import PlayButton from '../assets/play-circle.svg';
import Video from './video';

const VIDEO_ID = 'IbvuniqNPPw';

export default function Intro() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section id="intro" className="center row justify-content-center">
      <div className="col col-lg-8 col-md-10">
        <h1>
          Turn <em>audio</em> into amazing <em>videos</em>
        </h1>
        <Link href="/download">
          <a id="download-button-intro" className="button" data-umami-event="download-button-intro">
            Download Astrofox
          </a>
        </Link>
        <div
          id="video-screenshot"
          className="screenshot pt-5 pb-5"
          data-umami-event="video-screenshot"
          onClick={() => setShowVideo(true)}
        >
          <img src="/images/screenshot.jpg" />
          <PlayButton id="video-play-button" />
        </div>
        <p className="font-large">
          Astrofox is a free, open-source motion graphics program that lets you turn your audio into
          custom, shareable videos. Combine text, images, animations and effects to create stunning,
          unique visuals. Then generate high-definition videos to share with your fans on social
          media.
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
