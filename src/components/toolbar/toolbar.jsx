import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import axios from 'axios';
import { useContext } from 'react';
import { CatContext } from '../../context/catContext';

const ToolBar = () => {
  const {setCat,setMovieType} = useContext(CatContext)
  const getCatMovies = async(name)=>{
  try {
       const res =  await axios.get(
      `https://api.themoviedb.org/3/movie/${name}?page=1&api_key=642b78b39a82d01fa71058b22ac6a80e`
    );
    const data = res.data;
    setCat(name)
    setMovieType(data.results.slice(0,18))
  } catch (error) {
    console.log(error)
  }
  }

  return (
    <>
    <h1 className='text-center text-light p-5'>Your Movie App</h1>
    <Container className='mb-5'>
      <ButtonToolbar
        className="justify-content-between mt-4"
        aria-label="Toolbar with Button groups"
      >
        <ButtonGroup aria-label="First group">

          <Button 
          variant="secondary" 
          name="top_rated"
          onClick={e=>{getCatMovies(e.currentTarget.name)}}
          >Top Rated</Button>
          
          <Button 
          variant="secondary"
          name="upcoming"
          onClick={e=>{getCatMovies(e.currentTarget.name)}}
          >Upcomming</Button>
          

          <Button 
          variant="secondary"
          name="popular"
          onClick={e=>{getCatMovies(e.currentTarget.name)}}
          >Popular</Button>


        </ButtonGroup>
        <InputGroup>
          <InputGroup.Text id="btnGroupAddon2">Search</InputGroup.Text>
          <Form.Control
            type="text"
            placeholder="Movie name"
            aria-label="Movie name"
            aria-describedby="btnGroupAddon2"
          />
        </InputGroup>
      </ButtonToolbar>
    </Container>
    </>
    
  )
}

export default ToolBar