// @flow
import React from 'react';

type Props = {|
  x: number,
  y: number,
  // eslint-disable-next-line react/no-unused-prop-types
  reason: string,
  children: React$Node,
|};

const PixelShifter = ({ x = 0, y = 0, children }: Props = {}) => (
  <span
    className="dib"
    style={{
      transform: `translate(${x}px, ${y}px)`,
    }}>
    {children}
  </span>
);

export default PixelShifter;
