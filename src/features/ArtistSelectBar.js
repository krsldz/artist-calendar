import { Card, Typography, ScrollBtn } from '../components';

const ArtistSelectBar = ({ artists = [] }) => (
  <div className="bg-back p-4 m-4 rounded-lg">
    <div className="flex justify-between items-center">
      <Typography type="title" text="YOUR ARTISTS" />
      <ScrollBtn />
    </div>
    <div className="flex justify-center items-center">
      {artists.map((artist) => (
        <Card key={artist.id} artist={artist} />
      ))}
    </div>
  </div>
);

export default ArtistSelectBar;
