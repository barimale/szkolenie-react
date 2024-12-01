import './App.css'
import { useState, useEffect } from "react";
import CreateMovie from './components/CreateMovie';
import MovieList from './components/MovieList';
import EditMovie from './components/EditMovie';
import Filters from './components/Filters';

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [filters, setFilters] = useState(undefined);
  const [editMovie, setEditMovie] = useState(undefined);

  useEffect(() => {
    const storedValue = localStorage.getItem('movies');
    if (storedValue) {
      setMovies(JSON.parse(storedValue));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('movies', JSON.stringify(movies));
  }, [movies]);


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
          <p>Formularz dodawania:</p>
          <CreateMovie onMoviesChanged={(item) => {
            setMovies([...movies, item])
          }} />
        </section>
      ) :
        (
          <section>
            <p>Formularz edycji:</p>
            <EditMovie
              selectedMovie={editMovie}
              onChanged={(item) => {
                let moviedEdited = movies;
                const index = moviedEdited.findIndex(p => p.id === item.id);
                moviedEdited[index] = item;
                setMovies(() => moviedEdited);
                setEditMovie(undefined);
              }}
              onCancel={() => { setEditMovie(undefined) }} />
          </section>
        )}
      <section>
        <p>Lista filmów i seriali:</p>
        <MovieList
          movies={filteredMovies}
          onEditMovie={(item) => setEditMovie(item)}
          onMoviesChanged={(items) => setMovies(items)} />
      </section>
      <section>
        <p>Filtry:</p>
        <Filters onFiltersChanged={(items) => setFilters(items)} />
      </section>
      <footer>
      </footer>
    </>
  )
}

export default App
