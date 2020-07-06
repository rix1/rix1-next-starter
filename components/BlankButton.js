// @flow
import React from 'react';

type Props = {|
  children: React$Node,
  className: string,
|};

const BlankButton = ({ children, className = '', ...rest }: Props = {}) => (
  <button
    type="button"
    className={`f5 fw4 dim link navy underline pointer pv1 bg-transparent bn ${className}`}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}>
    {children}
  </button>
);

export default BlankButton;
