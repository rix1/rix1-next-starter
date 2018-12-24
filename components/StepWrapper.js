// @flow
import React from 'react';
import { css } from '@emotion/core';

type StepWrapperProps = {
  children: React$Node,
  isActive: boolean,
  forwardRef: React$Ref<'div'>,
  className?: string,
};

const StepWrapper = ({
  children,
  isActive,
  forwardRef,
  className = '',
}: StepWrapperProps = {}) => (
  <div
    ref={forwardRef}
    css={css`
      opacity: ${isActive ? 1 : 0.5};
    `}
    className={`mv6 ${className}`}>
    {children}
  </div>
);

export default StepWrapper;
