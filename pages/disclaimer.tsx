import React from 'react';
import Layout from 'components/templates/Layout';
import { getStaticContent, StaticContent } from 'lib/static-contents';

type Props = StaticContent;

const PrivacyPolicyPage = ({ contentHtml, frontmatter }: Props) => {
  return (
    <Layout title='免責事項'>
      <h1 className='pb-4 text-4xl font-bold'>{frontmatter.title}</h1>
      <div
        className='markdown'
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      ></div>
    </Layout>
  );
};

export default PrivacyPolicyPage;

export const getStaticProps = async () => {
  const staticContent = await getStaticContent('disclaimer.md');

  return {
    props: {
      ...staticContent,
    },
  };
};
