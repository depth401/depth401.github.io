import Link from 'next/link';

type Props = {
  title: string;
};

const Header = ({ title }: Props) => (
  <header className='flex w-full bg-white border-b items-center justify-between flex-wrap p-5 m-auto top-0 shadow-sm'>
    <Link href='/'>
      <a
        className='text-xl sm:text-2xl md:text-3xl'
        style={{ fontFamily: "'Kaisei Decol', self" }}
      >
        {title}
      </a>
    </Link>
  </header>
);

export default Header;
