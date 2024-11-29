import './App.css'
import { useState, useEffect } from "react";
import CreateMovie from './components/CreateMovie';
import MovieList from './components/MovieList';
import EditMovie from './components/EditMovie';
import Filters from './components/Filters';

function App() {
  const [movies, setMovies] = useState([]);
  const [editMovie, setEditMovie] = useState(undefined);

  useEffect(() => {
    console.log('movie added');
  }, [movies]);

  useEffect(() => {
    console.log('movie edited');
  }, [editMovie]);

  return (
    <>
      <header>
      </header>
      {editMovie === undefined && (
        <section>
          <p>Formularz dodawania</p>
          <CreateMovie OnMoviesChanged={(items) => setMovies(items)} />
        </section>
      )}
      {editMovie !== undefined && (
        <section>
          <p>Formularz edycji</p>
          <EditMovie selectedMovie={editMovie} OnMoviesChanged={(items) => setMovies(items)}/>
        </section>
      )}

      <p>Lista filmów lub seriali:</p>
      <MovieList movies={movies} OnEditMovie={(item) => setEditMovie(item)} />
      <section>
        <p>Filtry:</p>
        <Filters />
      </section>
      <footer>
      </footer>
    </>
  )
}

export default App
