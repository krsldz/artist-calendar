import Image from 'next/image';

const Card = () => (
  <div className='flex flex-col justify-center items-center p-2.5'>
    <Image src="/Fletcher.png" width={208} height={208} alt='Fletcher' className='border-8 border-primary rounded-full w-52 h-52' />
    <span className='text-lg font-semibold mt-2 text-white'>Fletcher</span>
  </div>
);

export default Card;
