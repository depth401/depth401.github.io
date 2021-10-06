import Link from 'next/link';
import React from 'react';
import Tag from 'components/atoms/Tag';
import Layout from 'components/layouts/Layout';

const IndexPage = () => {
  return (
    <Layout title='Home'>
      <p>
        <Link href='/about'>
          <a>About</a>
        </Link>
      </p>
      <Tag name='テスト' href='/about' />
    </Layout>
  );
};

export default IndexPage;
