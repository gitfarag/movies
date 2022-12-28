import axios from "axios";
import { useState } from "react";
import {  Col, Container, Row } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";

const Peg = ({ cat, setMovieType }) => {
  const [act, setActive] = useState(1);
  const handler = async (e) => {
    try {
      const act = e.currentTarget.name;
      setActive(act);
      const page = e.currentTarget.name;
      const type = cat;
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${type}?page=${page}&api_key=642b78b39a82d01fa71058b22ac6a80e`
      );
      const data = res.data.results;
      setMovieType(data.slice(0, 18));
    } catch (error) {}
  };
  return (
    <Container>
      <Row className="mt-2">
        <Col sm="12" className="d-flex justify-content-center">
          <Pagination size="sm" active={act}>
            <Pagination.Item
              onClick={(e) => handler(e)}
              className="m-2"
              name="1"
            >
              1
            </Pagination.Item>
            <Pagination.Item
              name="2"
              onClick={(e) => handler(e)}
              className="m-2"
            >
              2
            </Pagination.Item>
            <Pagination.Item
              onClick={(e) => handler(e)}
              className="m-2"
              name="3"
            >
              3
            </Pagination.Item>
            <Pagination.Item
              onClick={(e) => handler(e)}
              className="m-2"
              name="4"
            >
              4
            </Pagination.Item>
          </Pagination>
        </Col>
      </Row>
    </Container>
  );
};

export default Peg;
