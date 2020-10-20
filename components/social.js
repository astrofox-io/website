import React from 'react';
import Twitter from 'assets/twitter.svg';
import Discord from 'assets/discord.svg';
import Reddit from 'assets/reddit.svg';
import Instagram from 'assets/instagram.svg';
import Facebook from 'assets/facebook.svg';
import config from 'config/site.json';

export default function Social() {
  return (
    <div className="social-links pt-5 pt-lg-0 justify-content-center justify-content-lg-end">
      <a
        href={config.discordUrl}
        className="umami--click--discord-button"
        rel="noopener"
        target="_blank"
      >
        <Discord />
      </a>
      <a
        href={config.redditUrl}
        className="umami--click--reddit-button"
        rel="noopener"
        target="_blank"
      >
        <Reddit />
      </a>
      <a
        href={config.twitterUrl}
        className="umami--click--twitter-button"
        rel="noopener"
        target="_blank"
      >
        <Twitter />
      </a>
      <a
        href={config.instagramUrl}
        className="umami--click--instagram-button"
        rel="noopener"
        target="_blank"
      >
        <Instagram />
      </a>
      <a
        href={config.facebookUrl}
        className="umami--click--facebook-button"
        rel="noopener"
        target="_blank"
      >
        <Facebook />
      </a>
    </div>
  );
}
