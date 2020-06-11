import React, { Component } from 'react';

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

class Videos extends Component {
  state = {
    url: videos[0].url,
  };

  showVideo = url => this.setState({ url });

  render() {
    const { url: videoUrl } = this.state;

    return (
      <section className="videos row justify-content-center">
        <div className="col">
          <h1>Unleash your creativity</h1>
          <p>These videos were made with Astrofox. What will you create?</p>
          <div className="thumbnails">
            {videos.map(({ img, url, alt }) => (
              <div className="thumbnail">
                <img
                  key={url}
                  src={`/images/videos/${img}`}
                  onClick={() => this.showVideo(url)}
                  alt={alt}
                />
              </div>
            ))}
          </div>
          {videoUrl && (
            <div className="video">
              <div className="video__wrapper">
                <iframe
                  width="720"
                  height="720"
                  src={`https://www.youtube.com/embed/${videoUrl}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default Videos;
