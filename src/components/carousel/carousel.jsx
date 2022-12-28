import Carousel from "react-bootstrap/Carousel";
import "./carousel.css";
const HomeCarousel = ({ movies }) => {
  return (
    <Carousel>
      {movies.map((movie) => {
        return (
          <Carousel.Item
          interval={800}
          key={movie.id} style={{ height: "100vh" }}>
            <img
              className="d-block w-100"
              src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
              alt="First slide"
            />
            <div className="img-overlay d-block w-100"></div>
            <Carousel.Caption>
              <h3>{movie.title}</h3>
              <p>{movie.overview ? `${movie.overview}` : "no overview"}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default HomeCarousel;
