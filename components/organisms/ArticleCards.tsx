import Link from 'next/link';
import ArticleCard from 'components/molecules/ArticleCard';
import type { Props as ArticleProps } from 'components/molecules/ArticleCard';

type Props = {
  cards: ArticleProps[];
};

const ArticleCards = ({ cards }: Props) => (
  <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-4'>
    {cards.map((props, index) => (
      <ArticleCard key={index} {...props} />
    ))}
  </div>
);

export default ArticleCards;
