import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./details.css";

const DetailsHero = () => {
  return (
    <>
      <Container>
        <Row>
          <Col sm="12" md="6" className="hero-text text-light">
            <h1>Watch everywhere.</h1>
            <h2>
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV without paying more.
            </h2>
          </Col>
          <Col sm="12" md="6" className="hero">
            <img
              className="hero-img"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
              alt="imgentiy"
            />
            <div 
            className="our-story-card-animation"
             data-uia="our-story-card-animation">
              <video className="our-story-card-video" 
              data-uia="our-story-card-video" 
              autoPlay={true} playsInline={true} muted="" loop={'1'}>
                <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v" type="video/mp4"/></video><div className="our-story-card-animation-text"></div><div className="our-story-card-animation-custom" data-uia="our-story-card-custom" aria-hidden="true"></div></div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default DetailsHero;
