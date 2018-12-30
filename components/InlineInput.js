// @flow
import React from 'react';
import { css } from '@emotion/core';

type Props = { className?: string, error?: boolean };

const InlineInput = ({
  className = '',
  error = false,
  ...rest
}: Props = {}) => (
  <input
    css={theme => css`
      border: none;
      border-bottom: ${theme.sizes.lineWidth} dotted ${error ? 'red' : 'gray'};
      outline: none;
      width: 3em;
      text-align: right;
      &:focus {
        border-bottom: ${theme.sizes.lineWidth} solid ${theme.colors.orange};
      }
    `}
    className={`ph2 ${className}`}
    {...rest}
  />
);

export default InlineInput;
