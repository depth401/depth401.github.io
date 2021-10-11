import React from 'react';
import Layout from 'components/templates/Layout';
import { getAllPostSlugs, getPostBySlug, PostContent } from 'lib/posts';

type Props = PostContent;

const FirstPost = ({ slug, frontmatter, contentHtml }: Props) => {
  return (
    <Layout>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }}></div>
    </Layout>
  );
};

export default FirstPost;

type Params = {
  params: {
    slug: string;
  };
};

export const getStaticPaths = async () => {
  const paths = getAllPostSlugs();

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: Params) => {
  const postData = await getPostBySlug(params.slug);
  return {
    props: {
      ...postData,
    },
  };
};
