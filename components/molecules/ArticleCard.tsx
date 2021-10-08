import Link from 'next/link';
import Tag from 'components/atoms/Tag';

type Props = {
  href: string;
  title: string;
  overview: string;
};

const ArticleCard = ({ title, href, overview }: Props) => (
  <Link href={href}>
    <a>
      <div className='p-5 border-solid border rounded-lg shadow-md hover:shadow-none'>
        <div className='text-xl font-bold'>{title}</div>
        <div className='flex flex-wrap flex-row mt-2'>
          {[1, 2, 3, 4, 5].map((id) => (
            <span key={id} className='h-auto pr-2 pt-2'>
              <Tag text='Java' />
            </span>
          ))}
        </div>
        <div className='pt-2 pb-2'>{overview}</div>
        <div className='flex justify-end text-sm text-gray-500'>
          2021年1月1日
        </div>
      </div>
    </a>
  </Link>
);

export default ArticleCard;
