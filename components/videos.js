import React, { useState } from 'react';
import Video from 'components/video';

const videos = [
  {
    img: 'alex-metric-always-there.jpg',
    url: 'kSaAldmmno8',
    alt: 'Alex Metric - Always There',
  },
  { img: 'kygo-younger.jpg', url: '3MzXm3ACQGY', alt: 'Kygo - Younger' },
  { img: 'lucas-nord-voices.jpg', url: 'Stah4jJJ0Ps', alt: 'Lucas Nord - Voices' },
  { img: 'odesza-late-night.jpg', url: 'Hcx4Noz1Hhk', alt: 'Odesza - Late Night' },
  { img: 'kaskade-disarm-you.jpg', url: '9PrUOYw88m0', alt: 'Kaskade - Disarm You' },
];

export default function Videos() {
  const [video, setVideo] = useState(videos[0].url);

  return (
    <section id="videos" className="center row justify-content-center">
      <div className="col">
        <h1>Unleash your creativity</h1>
        <p>These videos were made with Astrofox. What will you create?</p>
        <div className="thumbnails">
          {videos.map(({ img, url, alt }) => (
            <div
              key={url}
              id={`video-thumbnail-${url}`}
              className="thumbnail"
              data-umami-event={`video-thumbnail-${url}`}
              onClick={() => setVideo(url)}
            >
              <img key={url} src={`/images/videos/${img}`} alt={alt} />
            </div>
          ))}
        </div>
        {video && <Video video={video} width={720} height={720} aspect="square" />}
      </div>
    </section>
  );
}
