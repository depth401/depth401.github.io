import Link from 'next/link';
import Date from 'components/atoms/Date';
import Tag from 'components/atoms/Tag';
import * as gtag from 'lib/gtag';

export type Props = {
  title: string;
  href: string;
  overview: string;
  tags: string[];
  updatedAt: string;
};

const ClickEvent = () => {
  gtag.event({
    action: 'click',
    category: 'link',
    label: 'article_card',
  });
};

const ArticleCard = ({ title, href, overview, tags, updatedAt }: Props) => (
  <Link href={href} prefetch={false}>
    <a onClick={ClickEvent}>
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
        <Date iso8601={updatedAt} />
      </div>
    </a>
  </Link>
);

export default ArticleCard;
