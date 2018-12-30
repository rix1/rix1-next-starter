// @flow
import React, { type Node } from 'react';

type Props = {
  children: Node,
  className: string,
};

const Content = ({ children, className = '' }: Props) => (
  <div className={`ph3 ${className}`}>
    <div className="mw8 center">{children}</div>
  </div>
);

export default Content;
