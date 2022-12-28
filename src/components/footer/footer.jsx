import { Container, Row, Col } from "react-bootstrap";

import React from 'react'

const Footer = () => {
  return (
    <>
    <Container>
        <Row>
            <Col sm='12'>
                <h6 className="text-center mt-2 text-light"><span className="text-warning">All Rights Reserved</span>, Ahmed Farag</h6>
            </Col>
        </Row>
    </Container>
    </> )
}

export default Footer