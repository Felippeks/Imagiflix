import Hero from './components/Hero';
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel'
import movies from './mock/movies.mock';



function App() {
  

  return (
    <>
    <Hero/>
    <Navbar/>
    <Carousel title='Filmes' data={movies}/>
    </>
  )
}

export default App;
