import Image from 'next/image';
import Typography from './Typography';

const Card = ({ artist }) => {
  if (!artist) return null;
  return (
    <div className="flex flex-col justify-center items-center p-2.5">
      <Image
        src={artist.img}
        width={208}
        height={208}
        alt={artist.name}
        className="rounded-full w-52 h-52 hover:border-8 hover:border-primary hover:cursor-pointer"
      />
      <Typography text={artist.name} />
    </div>
  );
};

export default Card;
