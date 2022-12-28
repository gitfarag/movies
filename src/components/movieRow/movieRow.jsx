import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import MovieCard from '../partials/movieCard/card'

const MovieRow = ({el}) => {
  return (
    <Container>
      <h1 className='text-center text-warning mb-5'> Movie Details </h1>
        <Row className='mb-5'>
            <Col sm='12' md='8'>
               <MovieCard movie={el}/>
            </Col>
            <Col sm='12' md='4' className='text-light d-flex flex-column align-items-start justify-content-center'>
                <h2>{el.title}</h2>
                <div className="text-warning badge ">
                {el.adult ? "adult" : "not adult"}
                </div>
                <h4>overview</h4>
                <p>{el.overview}</p>
                <p>rate : {el.vote_count}</p>
                <p>date : {el.release_date}</p>
                <p>popularity : {el.popularity}</p>
            </Col>
        </Row>
    </Container>
  )
}

export default MovieRow