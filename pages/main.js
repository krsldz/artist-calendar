import Link from 'next/link';
import Card from '../components/Card';
import Button from '../components/Button';

const Main = () => (
    <div className='bg-back'>
      <h2 className="text-primary font-bold underline">Main Page</h2>
      <button className="text-secondary">Auth</button>
      <Card />
      <Button text="Register" handleClick={() => console.log('click')} />
      <Link className='inline-block w-fit mt-2.5 p-2.5 border border-accent rounded-lg hover:bg-primary hover:border-primary text-accent hover:text-back' href="/auth/logout">Log out</Link>
    </div>
);

export default Main;
