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
      .filter(p => !filters?.genre || p.genre === filters.genre)
      .filter(p => !filters?.score || p.score === filters.score)
      .filter(p => !filters?.type || p.type === filters.type)

    setFilteredMovies(filteredItems);
  }, [filters, movies]);

  const Update = (item) => {
    let items = movies;
    const index = items.findIndex(p => p.id === item.id);
    items[index] = item;
    console.log(items)
    setMovies(() => [...items]);
  }

  return (
    <>
      <header>
      </header>
      {editMovie === undefined ? (
        <section>
          <p>Formularz dodawania:</p>
          <CreateMovie onMovieCreated={(item) => {
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
                Update(item);
                setEditMovie(undefined);
              }}
              onCancel={() => {
                setEditMovie(undefined);
              }} />
          </section>
        )}
      <section>
        <p>Lista filmów i seriali:</p>
        <MovieList
          movies={filteredMovies}
          onEditMovieChosen={(item) => setEditMovie(item)}
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
