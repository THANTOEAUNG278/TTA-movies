import Card from "../component/movieCard";

const MoviesPage =()=>{
  return(
    <div className="mt-28">
      <div>
        <header className=" py-4">
          <h1 className="text-4xl font-bold text-white ml-16">MOVIES</h1>
        </header>
      </div>
      <Card/>
    </div>
  )
}
export default MoviesPage;