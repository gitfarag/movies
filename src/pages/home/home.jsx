import DetailsHero from "../../components/partials/movieDetailsHero/detailsHero";
import MovieCard from "../../components/partials/movieCard/card";
import TopRelated from "../../components/topRelated/topRelated";
import HomeCarousel from "../../components/carousel/carousel";
import ToolBar from "../../components/toolbar/toolbar";
import Popular from "../../components/popular/popular";
import { Col, Row, Container } from "react-bootstrap";
import Latest from "../../components/Latest/latest";
import NavBar from "../../components/navbar/navBar";
import { useEffect, useState } from "react";
import { SyncLoader } from "react-spinners";
import "./home.css";
import Peg from "../../components/peganition/peganition";

const Home = ({ popular, latest, topRated }) => {
  const [cat, setCat] = useState('')
  const [movieType, setMovieType] = useState([])
  const [loading, setLoading] = useState('')
  useEffect(() => {
    setLoading(false)
    setTimeout(() => {
      setLoading(true)
    }, 2000)
  }, [])

  return (
    <>
      <NavBar setCat={setCat} />
      <HomeCarousel movies={popular.slice(0, 5)} />
      <ToolBar setCat={setCat} setMovieType={setMovieType} />
      {
        !cat ?
          <>
            <Popular movies={popular.slice(0, 15)} />
            <div className="bg-warning mt-5">
              <DetailsHero />
            </div>
            <TopRelated movies={topRated.slice(0, 15)} />
            <Latest movies={latest.slice(0, 15)} />
          </> :
          <>
            <Container>
              <Row>
                {
                  !loading ? <Col sm='12' className="d-flex justify-content-center">
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
                <Peg cat={cat} setMovieType={setMovieType}/>
              </Row>
            </Container>

          </>
      }
    </>


  );
};

export default Home;
