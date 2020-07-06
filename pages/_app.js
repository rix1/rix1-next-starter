import React from 'react';
import App, { Container } from 'next/app';

import Navigation from '../components/Navigation';
import Link from '../components/Link';
import Emoji from '../components/Emoji';

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <div className="flex flex-column vh-100">
          <header className="tc">
            <h1 className="f1 fw7  relative dib">
              Rix1 starter <Emoji emoji="👩‍🍳" description="Cook" />
            </h1>
            <Navigation />
          </header>
          <div>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Component {...pageProps} />
          </div>

          <footer className="tc f6 moon-gray mb3 mt7">
            Created by{' '}
            <a
              className="f5 fw4 dim link near-black pv1 underline silver"
              href="https://twitter.com/rix1">
              rix1
            </a>
          </footer>
        </div>
      </Container>
    );
  }
}
