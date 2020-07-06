// @flow
import React from 'react';

import Content from '../components/Content';
import Page from '../components/Page';
import theme from '../styles/theme';

const Index = () => (
  <Page title="Rix1s NextJS starter ">
    <Content className="mw6 center">
      <p className="lh-copy">
        This is Rix1s NextJS starter. I have sort of done{' '}
        <dfn>mise en place</dfn> so that I can just start cooking PoCs without
        setting up anything.
        <span className="bg-black-05 pv2 ph3 lh-copy db mt3 br3 f5">
          <span className="fw5 f4 db lh-title">mise en place</span>
          <span className="silver db f6">
            /ˌmiːz ɒ̃ ˈplas,French miz ɑ̃ plas/
          </span>
          <i>noun</i> (in a professional kitchen) the preparation of dishes and
          ingredients before the beginning of service.
        </span>
      </p>

      <hr className="o-30 mv4" />

      <p>The kitchen has the following prepared for you:</p>
      <ul className="lh-copy">
        <li>NextJS</li>
        <li>Tachyons (from CDN) and Styled-jsx for styling</li>
        <li>Flow</li>
        <li>Jest</li>
        <li>ESLint</li>
        <li>Prettier</li>
        <li>Common components</li>
      </ul>
    </Content>
  </Page>
);

export default Index;
