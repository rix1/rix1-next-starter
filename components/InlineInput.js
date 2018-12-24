// @flow
import React from 'react';
import { css } from '@emotion/core';
import { withTheme } from 'emotion-theming';

type Props = { className?: string, error?: boolean };

const InlineInput = ({
  className = '',
  theme,
  error = false,
  ...rest
}: Props & App$ThemeProps = {}) => (
  <input
    css={css`
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

const Wrapped: React$ComponentType<Props> = withTheme(InlineInput);
export default Wrapped;
