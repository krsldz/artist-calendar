import { Typography, LinkBtn } from '../components';

const Profile = () => {
  return (
    <div className="flex flex-col justify-center items-center p-60">
      <Typography type="secondary" text="Profile Settings" />
      <div className="flex flex-col justify-center items-center bg-back p-8 m-4 rounded-lg w-fit mt-8">
        <LinkBtn href="/auth/logout" text="Log out" />
      </div>
    </div>
  );
};

export default Profile;
