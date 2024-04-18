import { Typography, Input, Button } from '../components';

const AuthForm = ({ onSubmit, title, btnText }) => (
  <>
    <Typography text={title} />
    <form
      onSubmit={onSubmit}
      className="flex justify-center items-center bg-back p-8 m-4 rounded-lg w-fit"
    >
      <Input name="email" type="email" placeholder="Enter your email" />
      <Input name="password" type="password" placeholder="Enter your password" />
      <Button type="submit" text={btnText} />
    </form>
  </>
);

export default AuthForm;
