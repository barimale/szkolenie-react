import './App.css'
import { useState, useEffect } from "react";
import CreateMovie from './components/CreateMovie';
import MovieList from './components/MovieList';
import EditMovie from './components/EditMovie';

function App() {
  const [movies, setMovies] = useState([]);
  const [editMovie, setEditMovie] = useState({ //to be changed
    title: '',
    genre: '',
    yearOfRelease: '',
    score: '',
    type: '',
    id: ''
  });

  useEffect(()=>{
    console.log('movie added');
  }, [movies]);

  return (
    <>
      <header>
      </header>
      <section>
        <p>Formularz dodawania</p>
        <CreateMovie OnMoviesChanged={(items) => setMovies(items)} />
      </section>
      <section>
        <p>Formularz edycji</p>
        <EditMovie selectedMovie={editMovie} />
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
