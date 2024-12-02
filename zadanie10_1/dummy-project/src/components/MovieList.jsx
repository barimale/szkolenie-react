import "./Movie.css";

const MovieList = (props) => {
  const removeMovie = (id) => {
    const filteredMovies = props.movies.filter(movie => movie.id !== id);
    props.onMoviesChanged(filteredMovies);
  }

  const editMovie = (id) => {
    const chosenMovie = props.movies.find(movie => movie.id === id);
    props.onEditMovieChosen(chosenMovie);
  }

  return (
    <div className="usersList">
      <div className="list">
        {props.movies.map((user) => {
          return (
            <div className="userItem" key={user.id} >
              <p>Tytuł: {user.title}</p>
              <p>Gatunek: {user.genre}</p>
              <p>Rok wydania: {user.yearOfRelease}</p>
              <p>Ocena: {user.score}</p>
              <p>Typ: {user.type === 'movies' ? 'Film' : 'Serial'}</p>
              <p>ID: {user.id}</p>
              <button style={{ margin: '5px 20px' }} onClick={() => removeMovie(user.id)}> Usuń</button>
              <button style={{ margin: '5px 20px' }} onClick={() => editMovie(user.id)}> Edytuj</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;