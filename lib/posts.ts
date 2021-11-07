import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import * as markdown from './markdown';

const postsDirectory = path.join(process.cwd(), 'contents/posts');

export type PostContent = {
  slug: string;
  frontmatter: {
    title: string;
    overview: string;
    tags: string[];
    publishedAt: string;
    updatedAt: string;
    draft: boolean;
  };
  contentHtml: string;
};

export const getSortedPostsDate = (): PostContent[] => {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, '');

      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      const { data } = matter(fileContents);

      return {
        slug,
        frontmatter: data,
      } as PostContent;
    })
    .filter((content) => !content.frontmatter.draft);

  return allPostsData.sort(({ frontmatter: a }, { frontmatter: b }) => {
    if (a.publishedAt < b.publishedAt) {
      return 1;
    } else if (a.publishedAt > b.publishedAt) {
      return -1;
    } else {
      return 0;
    }
  });
};

export const getPostBySlug = async (slug: string): Promise<PostContent> => {
  const fileName = `${slug}.md`;

  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents);
  const contentHtml = await markdown.toHtml(content);

  return {
    slug,
    frontmatter: data,
    contentHtml,
  } as PostContent;
};

export const getAllPostSlugs = () => {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ''),
      },
    };
  });
};