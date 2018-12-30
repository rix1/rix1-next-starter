// @flow
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';

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

const Line = ({ position, contained = false, ...rest }: Props = {}) => {
  if (contained) {
    return (
      <div
        css={theme => css`
          width: ${theme.sizes.lineWidth};
          position: relative;
          z-index: 1;
        `}>
        <StyledLine position={position} {...rest} />
      </div>
    );
  }
  return <StyledLine position={position} {...rest} />;
};

export default Line;
