import 'prism-themes/themes/prism-vs.css';
import Head from 'next/head';
import React from 'react';
import Date from 'components/atoms/Date';
import Tag from 'components/atoms/Tag';
import Layout from 'components/templates/Layout';
import * as date from 'lib/date';
import { getAllPostSlugs, getPostBySlug, PostContent } from 'lib/posts';

type Props = PostContent;

const Post = ({ slug, frontmatter, contentHtml }: Props) => {
  return (
    <>
      <Head>
        <meta name='description' content={frontmatter.overview} />
      </Head>
      <Layout title={frontmatter.title}>
        <div className='mx-auto max-w-3xl'>
          <div className='justify-center'>
            <h1 className='text-4xl font-bold pb-4'>{frontmatter.title}</h1>
            <div className='flex flex-wrap flex-row gap-x-1'>
              {frontmatter.tags.map((tag, index) => (
                <span key={index} className='h-auto pr-2 pt-2'>
                  <Tag text={tag} />
                </span>
              ))}
            </div>
            <Date iso8601={frontmatter.updatedAt} />
          </div>
          <div
            className='markdown mt-10 mb-10'
            dangerouslySetInnerHTML={{ __html: contentHtml }}
          ></div>
        </div>
      </Layout>
    </>
  );
};

export default Post;

type Params = {
  params: {
    slug: string;
  };
};

export const getStaticPaths = async () => {
  const paths = await getAllPostSlugs();

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
