import Link from 'next/link';
import React from 'react';
import * as gtag from 'lib/gtag';

type Props = {
  title: string;
};

const ClickEvent = () => {
  gtag.event({
    action: 'click',
    category: 'link',
    label: 'header_title',
  });
};

const Title = ({ title }: Props) => (
  <Link href='/'>
    <a
      className='text-xl text-black'
      style={{ fontFamily: "'Kaisei Decol', self" }}
      onClick={ClickEvent}
    >
      {title}
    </a>
  </Link>
);

export default Title;
