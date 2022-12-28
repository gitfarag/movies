import DetailsHero from "../../components/partials/movieDetailsHero/detailsHero";
import MovieRow from "../../components/movieRow/movieRow";
import { Button, Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { PuffLoader } from "react-spinners";
import axios from "axios";
import './movie.css'


const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [video, setVideo] = useState({});

  const firstLoad = async () => {
    try {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=642b78b39a82d01fa71058b22ac6a80e&language=en-US`
      );
      const videos = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos?api_key=642b78b39a82d01fa71058b22ac6a80e&language=en-US`
      );
      setMovie(res.data);
      setVideo(...videos.data.results.slice(0, 1));
    } catch (error) {
      // console.log(error)
      return error;
    }
  };

  useEffect(() => {

    window.scrollTo(0, 0);
    firstLoad();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <>
    <span className="spin">
    <PuffLoader color="#e4f3f0"/>
    </span>
    <Link to={'/'}>
    <Button className="home">
    <i className="icofont-ui-home" />
    </Button>
    </Link>
  
      <div key={movie.id}>
        <div className="bg-black mb-5">
          <DetailsHero />
        </div>
        <MovieRow el={movie} />
        <h1 className="p-5 text-center text-warning">watch trailer </h1>
        <Container>
          <Row>
            <Col sm="12" className="d-flex justify-content-center">
              <iframe
                title="Los renglones torcidos de Dios - Tráiler Oficial"
                src={`https://www.youtube.com/embed/${video.key}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen={true}
                className="movie"
              ></iframe>
            </Col>
          </Row>
        </Container>
      </div>

    </>
  );
};

export default Movie;
