import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MovieCard from "../partials/movieCard/card";

const Latest = ({movies}) => {
  return (
    <Container fuild="true">
      <Row><h5 className="text-light mt-5" >
        <span className="bg-warning p-2"
        style={{borderRadius: "5px"}}>Latest</span>
        </h5>
        </Row>
      <Row>
        {movies.map((movie) => {
          return (
            <Col xs="12"
                 md="4"
                className="text-light text-start p-2" key={movie.id}>
              <MovieCard movie={movie}/>
            </Col>
          );
        })}
      </Row>
    </Container>
  )
}

export default Latest