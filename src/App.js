import { MoviesContextProvider } from './context/moviesContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CatContextProvider } from './context/catContext';
import Footer from './components/footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Movie from './pages/movie/movie';
import Home from './pages/home/home';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      {/* <NavBar/> */}
      <Routes>
        <Route path='/' element={
          <MoviesContextProvider>
            <CatContextProvider>
              <Home />
            </CatContextProvider>
          </MoviesContextProvider>} />
        <Route path='/movie/:id' element={<Movie />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
