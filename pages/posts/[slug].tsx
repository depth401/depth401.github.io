import 'prism-themes/themes/prism-vs.css';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
} from 'react-share';
import Date from 'components/atoms/Date';
import Tag from 'components/atoms/Tag';
import Layout from 'components/templates/Layout';
import { getAllPostSlugs, getPostBySlug, PostContent } from 'lib/posts';
import settings from 'settings';

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
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name='description' content={frontmatter.overview} />
      </Head>
      <Layout title={frontmatter.title}>
        <div className='mx-auto max-w-3xl'>
          <div className='p-5 border rounded-lg shadow-sm'>
            {Header}
            <div
              className='markdown mt-10 mb-10'
              dangerouslySetInnerHTML={{ __html: contentHtml }}
            ></div>
            <hr />
            <div className='mt-5'>
              <div className='font-bold text-xl'>SHARE</div>
              <div className='mt-3 flex gap-x-2'>
                <TwitterShareButton
                  url={settings.siteMetadata.baseUrl + router.asPath}
                  title={frontmatter.title}
                  via={settings.siteMetadata.title}
                >
                  <TwitterIcon size={30} round={true}></TwitterIcon>
                </TwitterShareButton>
                <FacebookShareButton
                  url={settings.siteMetadata.baseUrl + router.asPath}
                  title={frontmatter.title}
                >
                  <FacebookIcon size={30} round={true}></FacebookIcon>
                </FacebookShareButton>
              </div>
            </div>
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
