import React from 'react';
import Link from 'next/link';

const menu = {
  Basics: [
    ['Getting started', '/docs/getting-started'],
    ['Navigation', '/docs/navigation'],
    ['Stage', '/docs/stage'],
    ['Control dock', '/docs/control-dock'],
    ['Player', '/docs/player'],
    ['Projects', '/docs/projects'],
    ['Load audio', '/docs/load-audio'],
    ['Save image', '/docs/save-image'],
    ['Save video', '/docs/save-video'],
  ],
  Advanced: [
    ['Layers', '/docs/layers'],
    ['Scenes', '/docs/scenes'],
    ['Reactors', '/docs/reactors'],
  ],
};

export default function Menu() {
  return (
    <div className="menu">
      {Object.keys(menu).map(key => (
        <div key={key}>
          <h3>{key}</h3>
          <ul>
            {menu[key].map(([text, url]) => (
              <li key={url}>
                <Link href={url}>
                  <a>{text}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
