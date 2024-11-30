import "./Movie.css";

const MovieList = (props) => {
  const removeMovie = (id) => {
    const filteredMovies = props.movies.filter(movie=>movie.id !== id);
    props.OnMoviesChanged(filteredMovies);
  }

  const editMovie = (id) => {
    const chosenMovie = props.movies.filter(movie=>movie.id === id);
    props.OnEditMovie(chosenMovie);
  }

  return (
    <div className="usersList">
      <div className="list">
        {props.movies.map((user) => {
          return (
            <div className="userItem" key={user.id} >
              <p>Tytuł: {user.title}</p>
              <p>Gatunek: {user.genre}</p>
              <p>Rok publikacji: {user.yearOfRelease}</p>
              <p>Ocena: {user.score}</p>
              <p>Typ: {user.type}</p>
              <p>ID: {user.id}</p>
              <button onClick={()=>removeMovie(user.id)}> Usuń</button>
              <button onClick={()=>editMovie(user.id)}> Edytuj</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;