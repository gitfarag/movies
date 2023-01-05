import DetailsHero from "../../components/partials/movieDetailsHero/detailsHero";
import { PopularService, TopRated, LatestService } from './../../controller'
import MovieCard from "../../components/partials/movieCard/card";
import TopRelated from "../../components/topRelated/topRelated";
import HomeCarousel from "../../components/carousel/carousel";
import { MoviesContext } from "../../context/moviesContext";
import Peg from "../../components/peganition/peganition";
import { useEffect, useState, useContext } from "react";
import ToolBar from "../../components/toolbar/toolbar";
import Popular from "../../components/popular/popular";
import { Col, Row, Container } from "react-bootstrap";
import Latest from "../../components/Latest/latest";
import NavBar from "../../components/navbar/navBar";
import { SyncLoader } from "react-spinners";
import "./home.css";
import { CatContext } from "../../context/catContext";


const _popular = new PopularService();
const _top = new TopRated();
const _latest = new LatestService();


const Home = () => {
  // global states from Context-API
  const {setPopular,setLatest,setTopRted } = useContext(MoviesContext)
  const { movieType, cat } = useContext(CatContext)
  const [loading, setLoading] = useState('')
  // set some state to render
  const firstLoad = async () => {
    try {
      const popMovies = await _popular.index()
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
  useEffect(() => {
    firstLoad().catch(err => { console.log(err) })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <NavBar />
      <HomeCarousel />
      <ToolBar />
      {
        !cat ?
          <>
            <Popular/>
            <div className="bg-warning mt-5">
              <DetailsHero />
            </div>
            <TopRelated/>
            <Latest/>
          </> :
          <>
            <Container>
              <Row>
                {
                  loading ? <Col sm='12' className="d-flex justify-content-center">
                    <SyncLoader color='rgba(158, 29, 44, 0.99)' size={50} center />
                  </Col> :
                    <>
                      {
                        movieType.map(movie => {
                          return (

                            <Col md='4' className="mb-4" key={movie.id}>
                              <MovieCard movie={movie} />
                            </Col>

                          )
                        })
                      }
                    </>
                }
                <Peg />
              </Row>
            </Container>

          </>
      }
    </>


  );
};

export default Home;
