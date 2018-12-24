// @flow
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { withTheme } from 'emotion-theming';

type Props = {
  position: number,
  contained?: boolean,
};

const StyledLine = styled.div`
  position: absolute;
  width: ${props => props.theme.sizes.lineWidth};
  background-color: ${props => props.theme.colors.orange};
  height: 100%;
  left: ${props => props.position}%;
`;

const Line = ({
  position,
  contained = false,
  theme,
  ...rest
}: Props & App$ThemeProps = {}) => {
  if (contained) {
    return (
      <div
        className={css`
          width: ${theme.sizes.lineWidth};
          position: relative;
          z-index: 1;
        `}>
        <StyledLine theme={theme} position={position} {...rest} />
      </div>
    );
  }
  return <StyledLine theme={theme} position={position} {...rest} />;
};

const Wrapped: React$ComponentType<Props> = withTheme(Line);
export default Wrapped;
