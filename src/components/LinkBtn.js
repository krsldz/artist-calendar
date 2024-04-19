import Link from 'next/link';

const LinkBtn = ({ href, text }) => (
  <Link
    className="inline-block w-fit mt-2.5 p-2.5 border border-accent rounded-lg hover:bg-primary hover:border-primary text-accent hover:text-back"
    href={href}
  >
    {text}
  </Link>
);

export default LinkBtn;
