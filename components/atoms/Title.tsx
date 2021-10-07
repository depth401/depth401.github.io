import Link from 'next/link';
import React from 'react';

type Props = {
  title: string;
};

const Title = ({ title }: Props) => (
  <Link href='/'>
    <a
      className='text-xl sm:text-2xl md:text-3xl text-black'
      style={{ fontFamily: "'Kaisei Decol', self" }}
    >
      {title}
    </a>
  </Link>
);

export default Title;
