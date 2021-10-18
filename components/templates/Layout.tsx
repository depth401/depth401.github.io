import Head from 'next/head';
import { ReactNode } from 'react';
import Footer from 'components/organisms/Footer';
import Header from 'components/organisms/Header';
import settings from 'settings';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => {
  return (
    <div className='flex flex-col h-screen'>
      <Head>
        <title>
          {title} | {settings.siteMetadata.title}
        </title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Header title={settings.siteMetadata.title} />
      <main className='flex-1 p-5'>
        <div className='max-w-6xl mx-auto'>{children}</div>
      </main>
      <Footer owner='depth401' />
    </div>
  );
};

export default Layout;
