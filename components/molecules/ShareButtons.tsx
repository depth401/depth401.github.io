import { useRouter } from 'next/router';
import {
  TwitterShareButton,
  TwitterIcon,
  FacebookShareButton,
  FacebookIcon,
} from 'react-share';
import settings from 'settings';

export type Props = {
  title: string;
};

const ShareButtons = ({ title }: Props) => {
  const router = useRouter();
  const url = settings.siteMetadata.baseUrl + router.asPath;
  const via = settings.siteMetadata.title;

  return (
    <div className='flex gap-x-2'>
      <TwitterShareButton url={url} title={title} via={via}>
        <TwitterIcon size={30} round={true}></TwitterIcon>
      </TwitterShareButton>
      <FacebookShareButton url={url} title={title}>
        <FacebookIcon size={30} round={true}></FacebookIcon>
      </FacebookShareButton>
    </div>
  );
};

export default ShareButtons;
