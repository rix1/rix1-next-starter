// @flow
import React from 'react';
import { ThemeProvider } from 'emotion-theming';

import Content from '../components/Content';
import Page from '../components/Page';

const colors = {
  dusty: 'rgba(217, 229, 214, 1);',
  blue: 'rgba(0, 167, 225, 1);',
  warm: 'rgba(237, 222, 164, 1);',
  peach: 'rgba(247, 160, 114, 1);',
  orange: 'rgba(255, 155, 66, 1);',
};

const sizes = {
  lineWidth: '3px',
};

const Index = () => (
  <ThemeProvider theme={{ colors, sizes }}>
    <Page title="Rix1s NextJS starter ">
      <Content>
        <p>This is Rix1's NextJS starter. It's set up with the following:</p>
        <ul>
          <li>Tachyons + Emotion (styling)</li>
          <li>Flow</li>
          <li>Jest</li>
          <li>ESLint</li>
          <li>Prettier</li>
          <li>Common components</li>
          <li>etc...</li>
        </ul>
      </Content>
    </Page>
  </ThemeProvider>
);

export default Index;
