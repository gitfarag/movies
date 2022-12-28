import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./card.css";

const MovieCard = ({ movie }) => {
  return (
    <>
      <Link to={`/movie/${movie.id}`} className="card-link">
        <Card className="card">
          <Card.Img
            variant="top"
            src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
            className="card-image"
          />
          <Card.Body className="card-body">
            <Card.Title className="card-title">
              <span className="text-light">{movie.title}</span>
              <div className="text-warning badge ">
                {movie.adult ? "adult" : "not adult"}
              </div>
              <div className="text-light date">
                <span>{movie.release_date}</span>
              </div>
            </Card.Title>
          </Card.Body>
        </Card>
      </Link>
    </>
  );
};

export default MovieCard;
