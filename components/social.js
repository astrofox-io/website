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
      <a href={config.discordUrl} data-umami-event="discord-button" rel="noopener" target="_blank">
        <Discord />
      </a>
      <a href={config.redditUrl} data-umami-event="reddit-button" rel="noopener" target="_blank">
        <Reddit />
      </a>
      <a href={config.twitterUrl} data-umami-event="twitter-button" rel="noopener" target="_blank">
        <Twitter />
      </a>
      <a
        href={config.instagramUrl}
        data-umami-event="instagram-button"
        rel="noopener"
        target="_blank"
      >
        <Instagram />
      </a>
      <a
        href={config.facebookUrl}
        data-umami-event="facebook-button"
        rel="noopener"
        target="_blank"
      >
        <Facebook />
      </a>
    </div>
  );
}
