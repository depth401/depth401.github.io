import Link from 'next/link';
import { FaJava } from 'react-icons/fa';

type Props = {
  text: string;
  href?: string;
};

const Tag = ({ text, href }: Props) => {
  const components = (
    <div className='flex inline-block pl-3 pr-3 pt-1 pb-1 border border-gray-400 rounded-full bg-gray-50 hover:bg-gray-200'>
      <FaJava className='flex-shrink-0 text-xl inline-block mr-1' />
      <span className='flex-shrink-0 inline-block text-xs font-bold'>
        {text}
      </span>
    </div>
  );

  return href ? (
    <Link href={href}>
      <a>{components}</a>
    </Link>
  ) : (
    components
  );
};

export default Tag;
