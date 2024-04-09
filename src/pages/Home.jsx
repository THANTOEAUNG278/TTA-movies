import PhotoSlideshow from "../component/PhotoSlideShow";
import Card from "../component/movieCard";
import Caption from "./Caption";


const HomePage =()=>{
  return(
    <>
      <section className="section-1">
        <div className="mt-28">
          <PhotoSlideshow/>
        </div>
      </section>
      <br />
      <section className="section-2">
        <div className="mt-">
          <Caption/>
        </div>
      </section>
      <br />
      <section className="section-3">
        <div>
          <div>
            <header className=" py-4 shadow-md">
              <h1 className="text-2xl font-bold text-white ml-16">Trending</h1>
            </header>
          </div>
          <Card/>
        </div>
      </section>
    </>
  )
  
}
export default HomePage;