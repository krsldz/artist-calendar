import { useRouter } from 'next/router';
import AuthForm from '../components/AuthForm';

const Login = () => {
  const router = useRouter();

  const handleSubmitForm = async (event) => {
    event.preventDefault();
    try {
      const formData = Object.fromEntries(new FormData(event.target));
      const req = await fetch('/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const res = await req.json();
      if (res.message && res.message === 'OK') {
        router.push('/main');
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <AuthForm onSubmit={handleSubmitForm} title="Sign in" btnText="sign in" />
  );
};

export default Login;
