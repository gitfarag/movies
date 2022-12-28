import { useEffect } from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import "./navbar.css";

const NavBar = ({setCat}) => {
  const handleHome = ()=>{
   setCat('')
  }
  useEffect(() => {

        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ButtonGroup vertical className="navigation">
        <Button className="navItem" onClick={handleHome}>
          <i className="icofont-ui-home" />
        </Button>
        <Button className="navItem">
          <i className="icofont-crown"></i>
        </Button>
        <Button className="navItem">
          <i className="icofont-play-alt-2"></i>
        </Button>
        <Button className="navItem">
          <i className="icofont-contact-add"></i>
        </Button>
    </ButtonGroup>
  );
};

export default NavBar;
