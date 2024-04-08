import Typography from './Typography';
import Input from './Input';
import Button from './Button';

const AuthForm = ({ onSubmit, title, btnText }) => (
     <>
    <Typography text={title} />
    <form onSubmit={onSubmit} className='bg-back'>
      <Input name="email" type="email" placeholder="Enter your email"/>
      <Input name="password" type="password" placeholder="Enter your password"/>
      <Button type="submit" text={btnText} />
    </form>
    </>

);

export default AuthForm;
