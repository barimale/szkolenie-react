import './App.css'
import { useState, useEffect } from "react";
import CreateMovie from './components/CreateMovie';
import MovieList from './components/MovieList';
import EditMovie from './components/EditMovie';
import Filters from './components/Filters';

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(movies);

  const [editMovie, setEditMovie] = useState(undefined);
  const [filters, setFilters] = useState(undefined);

  useEffect(() => {
    const filteredItems = movies
      .filter(p => p.genre === (filters === undefined || filters.genre === undefined || filters.genre === '' ? p.genre : filters.genre))
      .filter(p => p.score === (filters === undefined || filters.score === undefined || filters.score === '' ? p.score : filters.score))
      .filter(p => p.type === (filters === undefined || filters.type === undefined || filters.type === '' ? p.type : filters.type))
    
      setFilteredMovies(filteredItems);
  }, [filters, movies]);

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
            <EditMovie selectedMovie={editMovie} OnMoviesChanged={(items) => setMovies(items)} onCancel={()=> {setEditMovie(undefined)}}/>
          </section>
        )}
      <p>Lista filmów i seriali:</p>
      <MovieList movies={filteredMovies} OnEditMovie={(item) => setEditMovie(item)} OnMoviesChanged={(items) => setMovies(items)} />
      <section>
        <p>Filtry:</p>
        <p>{JSON.stringify(filters)}</p>
        <Filters onFiltersChanged={(items) => setFilters(items)} />
      </section>
      <footer>
      </footer>
    </>
  )
}

export default App
