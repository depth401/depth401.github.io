import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import * as markdown from 'lib/markdown';

const staticDirectory = path.join(process.cwd(), 'contents/static');

export type StaticContent = {
  frontmatter: {
    title: string;
  };
  contentHtml: string;
};

export const getStaticContent = async (
  fileName: string,
): Promise<StaticContent> => {
  const fullPath = path.join(staticDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents);
  const contentHtml = await markdown.toHtml(content);

  return {
    frontmatter: data,
    contentHtml,
  } as StaticContent;
};
