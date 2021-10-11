import Link from 'next/link';
import Title from 'components/atoms/Title';

type Props = {
  title: string;
};

const Header = ({ title }: Props) => (
  <header className='flex w-full bg-white border-b items-center justify-between flex-wrap pt-4 pb-4 pl-5 pr-5 m-auto top-0 shadow-sm'>
    <Title title={title} />
  </header>
);

export default Header;
