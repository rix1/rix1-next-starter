// @flow
import React, { type Node } from 'react';
import NextLink from 'next/link';

type LinkProps = {|
  children: Node,
  href: string,
|};

const Link = ({ children, href }: LinkProps) => (
  <NextLink href={href}>
    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
    <a className="f5 fw4 dim link near-black pv1">{children}</a>
  </NextLink>
);

export default Link;
