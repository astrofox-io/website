import React from 'react';

export default function Video({ video, width, height }) {
  return (
    <div className="video" style={{ maxWidth: width }}>
      <div className="video__wrapper" style={{ paddingBottom: `${(height / width) * 100}%` }}>
        <iframe
          width={width}
          height={height}
          src={`https://www.youtube.com/embed/${video}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}
