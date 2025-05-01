'use client';

import dynamic from 'next/dynamic';
import { MDXProvider } from '@mdx-js/react';
import { MDXComponents } from '../../../components/MDXComponents.jsx'; // 상대경로 확인 필요

export default function ClientMDXRenderer({ slug }) {
  const MDXContent = dynamic(
    () => import(`@/content/blog/${slug}.mdx`).then((mod) => mod.default),
    { ssr: false }
  );

  return (
    <MDXProvider components={MDXComponents}>
      <MDXContent />
    </MDXProvider>
  );
}
