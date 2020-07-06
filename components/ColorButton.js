// @flow
import React from 'react';

type Props = {|
  children: React$Node,
  className: string,
|};

const ColorButton = ({ children, className = '', ...rest }: Props = {}) => (
  <button
    type="button"
    className={`f5 fw4 dim link navy underline pointer bg-transparent bn pv0 ${className}`}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...rest}>
    {children}
  </button>
);

export default ColorButton;
