import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { compileMDX } from 'next-mdx-remote/rsc';

import { MDXComponents } from '@/components/MDXComponents';
import ContentWrapper from '@/components/ContentWrapper';
import ContentBody from '@/components/ContentBody';
import Blockquote from '@/components/ui/Blockquote';
import Header from '@/components/ui/Header';

export const dynamicParams = true;

export async function generateStaticParams() {
  const files = fs.readdirSync(path.join(process.cwd(), 'content/blog'));
  return files.map((filename) => ({
    slug: filename.replace(/\.mdx$/, ''),
  }));
}

export default async function Page({ params }) {
  const { slug } = params;

  const filePath = path.join(process.cwd(), 'content/blog', `${slug}.mdx`);
  const source = fs.readFileSync(filePath, 'utf8');
  const { content, data } = matter(source);

  const { content: MDXContent } = await compileMDX({
    source: content,
    components: MDXComponents,
    options: { parseFrontmatter: true },
  });

  return (
    <ContentWrapper>
      <ContentBody className="text-white/80">
        <article className="prose prose-neutral max-w-none">
          <Header>{data.title}</Header>
          <Blockquote>{data.description}</Blockquote>
          <hr />
          {MDXContent}
        </article>
      </ContentBody>
    </ContentWrapper>
  );
}
