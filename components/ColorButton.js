// @flow
import React from 'react';
import { css } from '@emotion/core';

type Props = {
  children: React$Node,
  className?: string,
};

const ColorButton = ({ children, className = '', ...rest }: Props = {}) => (
  <button
    type="button"
    css={theme => css`
      background-color: ${theme.colors.orange};
    `}
    className={`f4 fw4 white-90 pointer pv1 bn br2 w-100 pv2 ${className}`}
    {...rest}>
    {children}
  </button>
);

export default ColorButton;
