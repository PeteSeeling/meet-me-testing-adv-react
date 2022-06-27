import LikeList from '../LikeList/LikeList';

export default function Profile({ user }) {
  const { name, avatar, likes, motto, color, header } = user || {
    id: 1,
    created_at: '2021-12-13T00:17:29+00:00',
    name: 'Vonta',
    avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
    header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
    likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
    motto: 'Res Non Verba',
    color: 'crimson',
  }

  return (
    <div className="bg-gray-100 bg-opacity-95 my-12 pb-6 w-full justify-center items-center overflow-hidden md:max-w-sm rounded-lg shadow-sm mx-auto">
      <div className="relative h-40">
        <img className="absolute h-full w-full object-fill" src={header} alt="header" />
      </div>

      {/* Avatar */}
      <div className="relative shadow mx-auto h-36 w-36 -my-12 border-white rounded-full overflow-hidden border-4">
        <img className="object-fill w-full h-full" src={avatar} alt="avatar" />
      </div>
      {/* End Avatar */}

      <div className="mt-16">
        <h1 className="text-3xl text-center font-semibold">{name}</h1>
        <p className="text-lg text-gray-600 text-center italic" aria-label="motto">
          {motto}
        </p>
        
        <p className="text-lg text-gray-600 text-center">
          Favorite Color:{' '}
          <span className="italic uppercase" style={{ color: `${color}` }} aria-label="favColor">
            {color}
          </span>
        </p>
      </div>
      <LikeList likes={likes} name={name} />
    </div>
  )
}
