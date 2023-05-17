import React from 'react';
import Head from 'next/head';
import Header from './header';
import Footer from './footer';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>Astrofox{title && ` - ${title}`}</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap"
          rel="stylesheet"
        />
        {typeof window !== 'undefined' && process.env.NODE_ENV === 'production' && (
          <>
            <script
              async
              defer
              data-website-id="7f5a82ce-79e7-452d-b30b-5b65790ac62a"
              src="https://astrofox.io/stats/script.js"
            />
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-5VCRCJV27V"></script>
            <script>
              {`window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-5VCRCJV27V');`}
            </script>
            <script>
              {`!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.async=!0,p.src=s.api_host+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
              posthog.init('phc_EbDmdGm0ysDFgekr6KQMPlXEqxBBKAsx2QnGNEc0oiW',{api_host:'https://app.posthog.com'})`}
            </script>
          </>
        )}
      </Head>
      <Header />
      <main className="container">{children}</main>
      <Footer />
    </>
  );
}
