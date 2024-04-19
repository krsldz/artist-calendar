import { Typography, Input, Button } from '../components';

const AuthForm = ({ onSubmit, title, btnText }) => (
  <div className="flex flex-col justify-center items-center p-60">
    <Typography type="secondary" text={title} />
    <form
      onSubmit={onSubmit}
      className="flex flex-col justify-center items-center bg-back p-8 m-4 rounded-lg w-fit"
    >
      <div>
        <Input name="email" type="email" placeholder="Enter your email" />
        <Input name="password" type="password" placeholder="Enter your password" />
      </div>
      <div className="w-full flex items-center justify-between">
        <Button type="submit" text={btnText} />
      </div>
    </form>
  </div>
);

export default AuthForm;
