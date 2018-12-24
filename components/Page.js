// @flow
import React, { type Node } from 'react';
import Head from 'next/head';

type Props = {
  children: Node,
  title: string,
  description?: string,
};

const Page = ({ children, title, description = '' }: Props = {}) => (
  <section className="flex-auto relative overflow-hidden">
    <Head>
      <title>{title}</title>
      <meta key="og:title" property="og:title" content={title} />
      <meta key="description" property="description" content={description} />
      <meta
        key="og:description"
        property="og:description"
        content={description}
      />
    </Head>
    {children}
  </section>
);

export default Page;
