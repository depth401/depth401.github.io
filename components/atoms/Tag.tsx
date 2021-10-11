import Link from 'next/link';
import { DiGit, DiIntellij, DiJsBadge } from 'react-icons/di';
import {
  FaRust,
  FaGithub,
  FaTerminal,
  FaJava,
  FaHtml5,
  FaGitAlt,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiHaskell,
  SiScala,
  SiCss3,
  SiGnuemacs,
  SiSpacemacs,
  SiElm,
  SiUbuntu,
} from 'react-icons/si';

type Props = {
  text: string;
  href?: string;
};

const IconMap = (icon: string) => {
  const iconClassName = 'flex-shrink-0 text-xl inline-block mr-2';
  switch (icon) {
    case 'Java':
      return <FaJava className={iconClassName} />;
    case 'JavaScript':
      return <DiJsBadge className={iconClassName} />;
    case 'CSS':
      return <SiCss3 className={iconClassName} />;
    case 'HTML':
      return <FaHtml5 className={iconClassName} />;
    case 'GitHub':
      return <FaGithub className={iconClassName} />;
    case 'Haskell':
      return <SiHaskell className={iconClassName} />;
    case 'Scala':
      return <SiScala className={iconClassName} />;
    case 'Terminal':
      return <FaTerminal className={iconClassName} />;
    case 'IntelliJ':
      return <DiIntellij className={iconClassName} />;
    case 'Rust':
      return <FaRust className={iconClassName} />;
    case 'TypeScript':
      return <SiTypescript className={iconClassName} />;
    case 'Elm':
      return <SiElm className={iconClassName} />;
    case 'Emacs':
      return <SiGnuemacs className={iconClassName} />;
    case 'Spacemacs':
      return <SiSpacemacs className={iconClassName} />;
    case 'Git':
      return <FaGitAlt className={iconClassName} />;
    case 'Ubuntu':
      return <SiUbuntu className={iconClassName} />;
    default:
      return <></>;
  }
};

const Tag = ({ text, href }: Props) => {
  const components = (
    <div className='inline-block pl-3 pr-3 pb-1 border border-gray-300 rounded-full hover:bg-gray-100 hover:shadow-sm'>
      {IconMap(text)}
      <span className='flex-shrink-0 inline-block text-xs font-bold text-gray-600'>
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
