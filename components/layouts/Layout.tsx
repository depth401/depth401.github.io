import Head from 'next/head';
import Link from 'next/link';
import React, { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => {
  return (
    <div className='flex flex-col h-screen'>
      <Head>
        <title>{title} | 啓蒙の坂</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <header className='flex w-full bg-white border-b items-center justify-between flex-wrap p-5 m-auto top-0 shadow-sm'>
        <Link href='/'>
          <a
            className='text-xl sm:text-2xl md:text-3xl'
            style={{ fontFamily: "'Kaisei Decol', self" }}
          >
            啓蒙の坂
          </a>
        </Link>
      </header>
      <main className='flex-1 overflow-y-auto'>
        <div>{children}</div>
      </main>
      <footer>
        <hr />
        <div className='flex p-5 w-full justify-center'>
          <span>©️ 2021 depth401.</span>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
