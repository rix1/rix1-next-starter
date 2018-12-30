// @flow
import React from 'react';
import { ThemeProvider } from 'emotion-theming';

import Content from '../components/Content';
import Page from '../components/Page';
import theme from './theme';

const Index = () => (
  <ThemeProvider theme={theme}>
    <Page title="Rix1s NextJS starter ">
      <Content>
        <p>This is Rix1s NextJS starter. Its set up with the following:</p>
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
