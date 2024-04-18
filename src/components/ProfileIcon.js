import Link from 'next/link';

const ProfileIcon = ({ username }) => (
  <Link className="text-white font-medium hover:text-accent" href="/profile">
    <div className="py-1 px-3 rounded-full w-10 h-10 border-2 border-white hover:border-2 hover:border-accent hover:cursor-pointer text-white font-medium hover:text-accent">
      {username.slice(0, 1).toUpperCase()}
    </div>
  </Link>
);

export default ProfileIcon;
