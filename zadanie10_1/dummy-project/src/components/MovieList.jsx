import { useState } from "react";
import "./Movie.css";

const MovieList = (props) => {
  const [movies, setMovies] = useState(props.movies); // localstorage ? 

  const removeMovie = (id) => {
    const filteredMovies = movies.filter(movie=>movie.id !== id)
    setMovies(filteredMovies);
  }

  const editMovie = (id) => {
    const chosenMovie = movies.filter(movie=>movie.id === id)
    console.log(JSON.stringify(chosenMovie))
    props.OnEditMovie(chosenMovie);
  }

  return (
    <div className="usersList">
      <div className="list">
        {props.movies.map((user) => { // props movies ?
          return (
            <div className="userItem" key={user.id} >
              <p>Title: {user.title}</p>
              <p>Genre: {user.genre}</p>
              <p>yearOfRelease: {user.yearOfRelease}</p>
              <p>score: {user.score}</p>
              <p>type: {user.type}</p>
              <p>id: {user.id}</p>
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