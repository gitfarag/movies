import ButtonGroup from "react-bootstrap/ButtonGroup";
import { CatContext } from "../../context/catContext";
import { useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import "./navbar.css";
import axios from "axios";

const NavBar = () => {
  const {setCat,setMovieType} = useContext(CatContext)
  const handleHome =async (name)=>{
    try {
      const res = await axios.get(
       `https://api.themoviedb.org/3/movie/${name}?page=1&api_key=642b78b39a82d01fa71058b22ac6a80e`
     );
     const data = res.data
      setCat(name)
      setMovieType(data.results.slice(0,18))
    } catch (error) {
      console.log(error)
    }
  }
  const handleClick = (e)=>{
      e.preventDefault()
      window.scrollTo(0,0)
  }
  useEffect(() => {

        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <ButtonGroup vertical className="navigation">
        <Button name="" className="navItem" onClick={e=>handleClick(e)}>
          <i className="icofont-ui-home" />
        </Button>
        <Button name="upcoming" className="navItem" onClick={e=>handleHome(e.currentTarget.name)}>
          <i className="icofont-crown"></i>
        </Button>
        <Button name="top_rated" className="navItem" onClick={e=>handleHome(e.currentTarget.name)}>
          <i className="icofont-play-alt-2"></i>
        </Button>
        <Button className="navItem">
          <i className="icofont-contact-add"></i>
        </Button>
    </ButtonGroup>
  );
};

export default NavBar;
