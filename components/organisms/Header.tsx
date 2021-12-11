import Link from 'next/link';
import NavItem from 'components/atoms/NavItem';
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
    <nav className='flex ml-8 gap-x-8'>
      <NavItem
        title='プライバシーポリシー'
        href='/privacy-policy'
        event={{ label: 'header_privacy_policy' }}
      />
      <NavItem
        title='免責事項'
        href='/disclaimer'
        event={{ label: 'header_disclaimer' }}
      />
    </nav>
  </header>
);

export default Header;
