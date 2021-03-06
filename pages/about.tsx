import Link from 'next/link';
import React from 'react';
import Layout from 'components/templates/Layout';

const AboutPage = () => (
  <Layout title='About'>
    <h1>About</h1>
    <p>This is the about page</p>
    <p>
      <Link href='/'>
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export default AboutPage;
