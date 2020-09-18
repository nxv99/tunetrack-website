import Head from 'next/head';
import React from 'react';
import '../public/css/style.css';
import Layout from '../layouts/default';
function MyApp({ Component, pageProps }) {
  return (
    <div className="hei">
      <Component {...pageProps}></Component>
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Music statistics on demand. TuneTrack is an iOS application that enables users to view their music statistics on platforms such as Spotify and Apple Music."
        />
        <meta property="og:title" content="TuneTrack" />
        <meta
          property="og:image"
          content="https://www.tunetrack.app/images/icon.jpg"
        />
        <meta
          name="og:description"
          content="Music statistics on demand. TuneTrack is an iOS application that enables users to view their music statistics on platforms such as Spotify and Apple Music."
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.14.0/css/all.css"
          integrity="sha384-HzLeBuhoNPvSl5KYnjx0BT+WB0QEEqLprO+NBkkk5gbc67FTaL7XIGa2w1L0Xbgc"
          crossorigin="anonymous"
        />

        <title>TuneTrack</title>
        <link rel="icon" href="/icon.jpg" />
      </Head>
    </div>
  );
}

export default MyApp;
