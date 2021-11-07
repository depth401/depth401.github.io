import Head from 'next/head';
import React from 'react';
import ArticleCards from 'components/organisms/ArticleCards';
import Layout from 'components/templates/Layout';
import { getSortedPostsDate, PostContent } from 'lib/posts';

type Props = {
  allPostsData: PostContent[];
};

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsDate();
  return {
    props: {
      allPostsData,
    },
  };
};

const IndexPage = ({ allPostsData }: Props) => {
  const cards = allPostsData.map(({ slug, frontmatter }) => {
    return {
      href: `/posts/${slug}`,
      ...frontmatter,
    };
  });
  return (
    <>
      <Head>
        <meta
          name='description'
          content='プログラミングの記事をメインに書いていきたいブログ。'
        />
      </Head>
      <Layout title='Home'>
        <ArticleCards cards={cards} />
      </Layout>
    </>
  );
};

export default IndexPage;
