import Link from 'next/link';
import Title from 'components/atoms/Title';
import * as gtag from 'lib/gtag';

type Props = {
  title: string;
};

const ClickEvent = () => {
  gtag.event({
    action: 'click',
    category: 'link',
    label: 'header_privacy_policy',
  });
};

const Header = ({ title }: Props) => (
  <header className='flex w-full bg-white border-b items-center flex-wrap pt-4 pb-4 pl-5 pr-5 m-auto top-0 shadow-sm'>
    <Title title={title} />
    <nav className='ml-8 mr-8'>
      <span>
        <Link href='/privacy-policy' prefetch={false}>
          <a
            className='font-bold font-mono'
            style={{ fontFamily: "'Kaisei Decol', self" }}
            onClick={ClickEvent}
          >
            プライバシーポリシー
          </a>
        </Link>
      </span>
      <span className='ml-6'>
        <Link href='/disclaimer' prefetch={false}>
          <a
            className='font-bold font-mono'
            style={{ fontFamily: "'Kaisei Decol', self" }}
            onClick={ClickEvent}
          >
            免責事項
          </a>
        </Link>
      </span>
    </nav>
  </header>
);

export default Header;
