import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeKatex from 'rehype-katex';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkGemoji from 'remark-gemoji';
import remarkGfm from 'remark-gfm';
import remarkMath from 'remark-math';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

/**
 * Makrdown文字列をHTML文字列に変換して返す.
 *
 * @param markdown Markdown文字列
 * @returns HTML文字列
 */
export const toHtml = async (markdown: string): Promise<String> => {
  const processed = await unified()
    .use(remarkParse)
    .use(remarkMath)
    .use(remarkGfm)
    .use(remarkGemoji)
    .use(remarkRehype, {
      allowDangerousHtml: true,
    })
    .use(rehypeKatex)
    .use(rehypeDocument, {
      css: 'https://cdn.jsdelivr.net/npm/katex@0.15.0/dist/katex.min.css',
    })
    .use(rehypePrism)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: 'wrap' })
    .use(rehypeFormat)
    .use(rehypeStringify, {
      allowDangerousHtml: true,
    })
    .process(markdown);

  return processed.toString();
};
