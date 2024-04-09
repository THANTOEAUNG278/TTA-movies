import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "./component/Layout"
import HomePage from "./pages/Home"
import SearchPage from "./pages/Search"
import WatchListPage from "./pages/Watchlist"
import MoviesPage from "./pages/Movies"
import SeriesPage from "./pages/Series"
import "./App.css"
import Login from "./component/Login"
import Tomove from "./pages/ToMove"

const App = () =>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element ={<Layout/>}>
        <Route index  element = {<HomePage/>} />
        <Route path="search" element = {<SearchPage/>} />
        <Route path="watchList" element = {<WatchListPage/>} />
        <Route path="movies" element = {<MoviesPage/>} />
        <Route path="series" element= {<SeriesPage/>} />
        <Route path="login" element= {<Login/>}/> 
        <Route path="tomove" element ={<Tomove/>} /> 
      </Route>
    </Routes>
    </BrowserRouter>
  )
}
export default App;