import matter from 'gray-matter';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeFormat from 'rehype-format';
import rehypePrism from 'rehype-prism-plus';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify';
import remarkGemoji from 'remark-gemoji';
import remarkGfm from 'remark-gfm';
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
    .use(remarkGfm)
    .use(remarkGemoji)
    .use(remarkRehype, {
      allowDangerousHtml: true,
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
