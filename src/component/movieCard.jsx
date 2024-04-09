import { NavLink } from "react-router-dom";

const movies = [

  {
    id: 1,
    title: 'The Lion King',
    imageUrl: 'https://i.pinimg.com/736x/fa/9a/8a/fa9a8a55c1b85548186c05b4b45e503f.jpg',
    overview: 'Simba, a young lion prince, flees his kingdom after the murder of his father, Mufasa.'
  },
  {
    id: 2,
    title: 'THOR',
    imageUrl: 'https://i.pinimg.com/564x/08/9f/77/089f774c1a9c1b5d28a316c37c2f91c4.jpg',
    overview: 'A clownfish named Marlin sets off on a journey to find his son Nemo.'
  },
  {
    id: 3,
    title: 'Forzen',
    imageUrl: 'https://i.pinimg.com/originals/5a/89/dc/5a89dcff5c43b2139122ee2e3a78cded.gif',
    overview: 'Princess Anna sets off on a journey to what is aa sdadv sfe sdvfsd'
  },
  {
    id: 4,
    title: 'Aquaman',
    imageUrl: 'https://i.pinimg.com/564x/70/e3/34/70e334b7748e16a726d010760f4c3110.jpg',
    overview: 'A clownfish named Marlin sets off on a journey to find his son Nemo.'
  },
  {
    id: 5,
    title: 'Tanjiro',
    imageUrl: 'https://i.pinimg.com/originals/1e/e0/e1/1ee0e17a9a4eadecb93890878164dbdb.gif',
    overview: 'A clownfish named Marlin sets off on a journey to find his son Nemo.'
  },
  {
    id: 6,
    title: 'JuJuTsu Kasan',
    imageUrl: 'https://i.pinimg.com/736x/8f/ab/e5/8fabe5c85c1dc0c125cb21ded4e7a159.jpg',
    overview: 'A clownfish named Marlin sets off on a journey to find his son Nemo.'
  },
  {
    id: 7,
    title: 'Super Man',
    imageUrl: 'https://i.pinimg.com/564x/10/dd/a7/10dda73de7b6dd9d2ff3c2bf4aa64daa.jpg',
    overview: 'A clownfish named Marlin sets off on a journey to find his son Nemo.'
  },
  {
    id: 8,
    title: 'Naruto',
    imageUrl: 'https://i.pinimg.com/originals/29/08/c2/2908c2b1fe12b9dd35765f306ba7d783.gif',
    overview: 'A clownfish named Marlin sets off on a journey to find his son Nemo.'
  },
  {
    id: 9,
    title: 'Tanjiro',
    imageUrl: 'https://i.pinimg.com/564x/33/d8/3b/33d83b6d76b53f7a38cead3648f30f51.jpg',
    overview: 'A clownfish named Marlin sets off on a journey to find his son Nemo.'
  },
];


const MovieCard =({movie})=> {
  return(
    <>
    <NavLink to={"/tomove"}>
    <div className="relative group cursor-pointer">
      <div className="p-4 bg-gray-900 border-gray-200 rounded-lg rou shadow-md transition duration-300 ease-in-out transform group-hover:scale-110">
        <img className="w-full rounded-t-lg" src={movie.imageUrl} alt={movie.title} />
        <div className="p-4">
          <h2 className="text-xl text-red-600 font-bold">{movie.title} </h2>
          <p className="text-gray-100">{movie.overview} </p>
        </div>
      </div>
    </div>
    </NavLink>
    </>
  )
}

const Card = () => {
  return (
    <div className="bg-[0f2f62] min-h-screen">
      <div className="container mx-auto px-4 py-8 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map(movie => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
}

export default Card;
