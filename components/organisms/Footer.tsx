type Props = {
  owner: string;
};

const Footer = ({ owner }: Props) => (
  <footer>
    <hr />
    <div className='flex p-5 w-full justify-center'>
      <span>©️ 2021 {owner}.</span>
    </div>
  </footer>
);

export default Footer;
