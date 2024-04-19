import { Typography, LinkBtn } from '../components';

const Page = () => (
  <div className="flex flex-col justify-center items-center p-60">
    <Typography type="main" text="Artist Calendar" />
    <div className="flex flex-col justify-center items-center bg-back p-8 m-4 rounded-lg w-fit mt-8">
      <Typography type="secondary" text="Welcome" />
      <div className="mt-8">
        <LinkBtn href="/register" text="Register" />
        <LinkBtn href="/login" text="Log in" />
      </div>
    </div>
  </div>
);

export default Page;
