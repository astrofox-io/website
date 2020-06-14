import React from 'react';
import Block from 'components/block';
import Audio from '../assets/waveform-path.svg';
import Stopwatch from '../assets/stopwatch.svg';
import Infinity from '../assets/infinity.svg';
import Sliders from '../assets/sliders-h.svg';

export default function Features() {
  return (
    <section id="features" className="row justify-content-center">
      <Feature title="Audio reactive" icon={<Audio className="feature-icon" />}>
        Astrofox performs real-time audio analysis of your music to drive amazing motion graphics.
        Watch as shapes and effects pulse, rotate and move to the beat of your music.
      </Feature>
      <Feature title="Real-time rendering" icon={<Stopwatch className="feature-icon" />}>
        Forget keyframes. Forget waiting for your scene to render. Everything in Astrofox is
        rendered in real-time. You can even add and manipulate effects as the music is playing.
      </Feature>
      <Feature title="Precise control" icon={<Sliders className="feature-icon" />}>
        Astrofox features a streamlined interface that let's you easily control your visual
        elements. Use the built-in audio player to quickly seek through your music and find the
        perfect moment.
      </Feature>
      <Feature title="Infinite possibilities" icon={<Infinity className="feature-icon" />}>
        Astrofox lets you compose individual scenes with their own set of displays and effects.
        Seamlessly blend scenes together to create something completely unique.
      </Feature>
    </section>
  );
}

const Feature = ({ title, icon, children }) => (
  <Block className="feature" icon={icon} title={title}>
    {children}
  </Block>
);
