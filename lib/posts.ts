import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import * as markdown from './markdown';

const postsDirectory = path.join(process.cwd(), 'contents/posts');

const dirNameToSlug = (dirName: string): string => dirName;

const slugToPath = (slug: string): string =>
  path.join(postsDirectory, slug, 'index.md');

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
  const dirNames = fs.readdirSync(postsDirectory);
  const allPostsData = dirNames
    .map((dirName) => {
      const slug = dirNameToSlug(dirName);

      const fullPath = slugToPath(slug);
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
  const fullPath = slugToPath(slug);
  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const { data, content } = matter(fileContents);
  const contentHtml = await markdown.toHtml(content);

  return {
    slug,
    frontmatter: data,
    contentHtml,
  } as PostContent;
};

export const getAllPostSlugs = async () => {
  const dirNames = fs.readdirSync(postsDirectory);

  const contents = await Promise.all(
    dirNames.map((directory) => {
      const slug = dirNameToSlug(directory);

      return getPostBySlug(slug);
    }),
  );

  return contents
    .filter((content) => !content.frontmatter.draft)
    .map((content) => {
      return {
        params: {
          slug: content.slug,
        },
      };
    });
};
