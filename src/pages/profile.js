import Link from 'next/link';

const Profile = () => {
  return (
    <div className="bg-back">
      <h2 className="text-primary font-bold underline">Profile Settings</h2>
      <Link
        className="inline-block w-fit mt-2.5 p-2.5 border border-accent rounded-lg hover:bg-primary hover:border-primary text-accent hover:text-back"
        href="/auth/logout"
      >
        Log out
      </Link>
    </div>
  );
};

export default Profile;
