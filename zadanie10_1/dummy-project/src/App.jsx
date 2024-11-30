import './App.css'
import { useState, useEffect } from "react";
import CreateMovie from './components/CreateMovie';
import MovieList from './components/MovieList';
import EditMovie from './components/EditMovie';
import Filters from './components/Filters';

function App() {
  const [movies, setMovies] = useState([]);
  const [editMovie, setEditMovie] = useState(undefined);
  const [filters, setFilters] = useState(undefined);

  useEffect(() => {
    console.log('Do filtering here');
    console.log(JSON.stringify(filters));
  }, [filters]);

  useEffect(() => {
    console.log('movie added');
    console.log(JSON.stringify(movies));
  }, [movies]);

  useEffect(() => {
    console.log('movie edited');
    console.log(JSON.stringify(editMovie));
  }, [editMovie]);

  return (
    <>
      <header>
      </header>
      {editMovie === undefined ? (
        <section>
          <p>Formularz dodawania</p>
          <CreateMovie OnMoviesChanged={(items) => setMovies(items)} />
        </section>
      ) :
        (
          <section>
            <p>Formularz edycji</p>
            <EditMovie selectedMovie={editMovie} OnMoviesChanged={(items) => setMovies(items)} />
          </section>
        )}
      <p>Lista filmów i seriali:</p>
      <MovieList movies={movies} OnEditMovie={(item) => setEditMovie(item)} />
      <section>
        <p>Filtry:</p>
        <Filters onFiltersChanged={(items)=> setFilters(items)}/>
      </section>
      <footer>
      </footer>
    </>
  )
}

export default App
