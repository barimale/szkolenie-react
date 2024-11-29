import './App.css'
import { useState, useEffect } from "react";
import CreateMovie from './components/CreateMovie';
import MovieList from './components/MovieList';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(()=>{
    console.log('movie added');
  }, [movies]);

  return (
    <>
      <header>
      </header>
      <section>
        <p>Formularz dodawania lub edycji</p>
        <CreateMovie OnMoviesChanged={(items) => setMovies(items)} />
      </section>
        <p>Lista filmów lub seriali:</p>
        <MovieList movies={movies} />
      <section>
      </section>
      <footer>
      </footer>
    </>
  )
}

export default App
