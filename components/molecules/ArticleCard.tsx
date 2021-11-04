import Link from 'next/link';
import { FaRegCalendarAlt } from 'react-icons/fa';
import Tag from 'components/atoms/Tag';

import * as date from 'lib/date';

export type Props = {
  title: string;
  href: string;
  overview: string;
  tags: string[];
  updatedAt: string;
};

const ArticleCard = ({ title, href, overview, tags, updatedAt }: Props) => (
  <Link href={href}>
    <a>
      <div className='p-5 border border-solid border-opacity-0 hover:border-opacity-100 rounded-lg hover:shadow-md hover:border-gray-300'>
        <div className='text-xl font-bold'>{title}</div>
        <div className='pt-2 pb-2'>{overview}</div>
        <div className='flex flex-wrap flex-row gap-x-1'>
          {tags.map((tag, index) => (
            <span key={index} className='h-auto pr-2 pt-2'>
              <Tag text={tag} />
            </span>
          ))}
        </div>
        <div className='inline-box pt-3 text-gray-500'>
          <FaRegCalendarAlt className='flex-shrink-0 inline-block' />
          <span className='flex-shrink-0 inline-block pl-2 text-sm align-middle'>
            {date.formatISO(updatedAt)}
          </span>
        </div>
      </div>
    </a>
  </Link>
);

export default ArticleCard;
