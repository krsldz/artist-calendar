import Image from 'next/image';
import { ProfileIcon } from '../components';
import addIcon from '../../public/icons/add.svg';

const SearchBar = ({ handleClick, placeholder }) => (
  <div className="flex justify-between items-center bg-back p-4 m-4 rounded-lg">
    <div className="flex items-center">
      <input
        placeholder={placeholder}
        className="w-96 p-2.5 mr-4 bg-main rounded-lg text-white focus:outline-none placeholder:text-slate-400"
        onChange={handleClick}
      />
      <button>
        <Image src={addIcon} priority alt="add" />
      </button>
    </div>
    <ProfileIcon username="Kris" />
  </div>
);

export default SearchBar;
