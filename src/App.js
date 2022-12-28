import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useEffect, useState } from 'react';
import Home from './pages/home/home';
import Movie from './pages/movie/movie';
import { PopularService ,TopRated, LatestService } from './controller';
import Footer from './components/footer/footer';
const _popular = new PopularService();
const _top = new TopRated();
const _latest = new LatestService();

function App() {

  const [popular,setPopular] = useState([])
  const [latest,setLatest]= useState([])
  const [topRated,setTopRted]= useState([])
  // helpers
  const firstLoad = async()=>{
    try {
     const popMovies =  await _popular.index()
     const latestMovies = await _latest.index()
     const topMovies = await _top.index();
    setPopular(popMovies.results)
    setLatest(latestMovies.results)
    setTopRted(topMovies.results)
    } catch (error) {
      // console.log(error)
     return error
    }
 }

  useEffect(()=>{
  firstLoad()

},[])
  return (
    <BrowserRouter>
    {/* <NavBar/> */}
    <Routes>
      <Route path='/' element={
      <Home 
      popular={popular} 
      latest={latest}
      topRated={topRated}/>}/>
      <Route path='/movie/:id' element={<Movie/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
