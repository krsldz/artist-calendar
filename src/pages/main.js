import { SearchBar, ArtistSelectBar } from '../features';
import { Typography } from '../components';

const Main = () => {
  // const handleClick = async () => {
  //   const req = await fetch('https://accounts.spotify.com/api/token', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     body: JSON.stringify({
  //       client_id: 'b09f68ff86884cb1bc5d092779b67197',
  //       code: '2123c9af132c45a9a5d6584e28cdcc62',
  //       grant_type: 'authorization_code',
  //       code_verifier: '6xPvNSQFa2xKqWvOGD7VYdyUPjMuyyz7dXQ4UOdHBBNk5pTaCL3uDdFKInKJy5Kw',
  //       redirect_uri: 'http://localhost:4000/main',
  //     }),
  //   });
  //   const res = await req.json();
  //   console.log(res);
  // };
  return (
    <>
      <SearchBar placeholder="Search for your favorite artist" />
      <div className="h-60 mx-4 my-8 p-4 border-2 rounded-lg border-accent">
        <Typography type="secondary" text="Welcome to Artist Calendar," />
        <Typography type="typing" text="Kristina" />
      </div>
      <ArtistSelectBar
        artists={[
          { img: '/Fletcher.png', id: 1, name: 'Fletcher' },
          { img: '/Fletcher.png', id: 2, name: 'Fletcher' },
          { img: '/Fletcher.png', id: 3, name: 'Fletcher' },
          { img: '/Fletcher.png', id: 4, name: 'Fletcher' },
          { img: '/Fletcher.png', id: 5, name: 'Fletcher' },
        ]}
      />
    </>
  );
};

export default Main;
