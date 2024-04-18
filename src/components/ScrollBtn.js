import Image from 'next/image';
import leftIcon from '../../public/icons/left.svg';
import rightIcon from '../../public/icons/right.svg';

const ScrollBtn = () => (
  <div>
    <button
      className="pr-1 border border-accent rounded-full hover:bg-primary hover:border-primary text-accent text-lg hover:text-back w-10 h-10"
      type="button"
    >
      <Image src={leftIcon} priority alt="left" />
    </button>
    <button
      className="pl-1 ml-2.5 border border-accent rounded-full hover:bg-primary hover:border-primary text-accent text-lg hover:text-back w-10 h-10"
      type="button"
    >
      <Image src={rightIcon} priority alt="right" />
    </button>
  </div>
);

export default ScrollBtn;
