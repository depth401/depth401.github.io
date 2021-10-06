import Link from 'next/link';

type Props = {
  name: string;
  href?: string;
};

const Tag = ({ name, href }: Props) => {
  const components = (
    <div>
      <span>{name}</span>
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
