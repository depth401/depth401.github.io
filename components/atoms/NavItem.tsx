import Link from 'next/link';
import * as gtag from 'lib/gtag';

type Props = {
  title: string;
  href: string;
  event: {
    label: string;
  };
};

const ClickEvent = (label: string) => {
  return () =>
    gtag.event({
      action: 'click',
      category: 'link',
      label,
    });
};

const NavItem = ({ title, href, event: { label } }: Props) => {
  return (
    <span>
      <Link href={href} prefetch={false}>
        <a
          className='font-bold font-mono'
          style={{ fontFamily: "'Kaisei Decol', self" }}
          onClick={ClickEvent(label)}
        >
          {title}
        </a>
      </Link>
    </span>
  );
};

export default NavItem;
