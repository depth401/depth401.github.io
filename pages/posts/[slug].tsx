import 'prism-themes/themes/prism-vs.css';
import Head from 'next/head';
import React from 'react';
import { Utterances } from 'utterances-react-component';
import Date from 'components/atoms/Date';
import Tag from 'components/atoms/Tag';
import ShareButtons from 'components/molecules/ShareButtons';
import Layout from 'components/templates/Layout';
import { getAllPostSlugs, getPostBySlug, PostContent } from 'lib/posts';

type Props = PostContent;

const Post = ({ slug, frontmatter, contentHtml }: Props) => {
  const Header = (
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
  );

  return (
    <>
      <Head>
        <meta name='description' content={frontmatter.overview} />
      </Head>
      <Layout title={frontmatter.title}>
        <div className='mx-auto max-w-3xl'>
          <div className='p-5 border rounded-lg'>
            {Header}
            <div
              className='markdown mt-10 mb-10'
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            ></div>
            <hr />
            <div className='mt-5'>
              <div className='font-bold text-xl mb-3'>SHARE</div>
              <ShareButtons title={frontmatter.title} />
            </div>
          </div>
          <div className='mt-5 p-5 border rounded-lg'>
            <div className='font-bold text-xl'>COMMENT</div>
            <Utterances
              repo='depth401/depth401.github.io'
              theme='github-light'
              issueTerm='pathname'
              label='コメント'
            />
          </div>
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
