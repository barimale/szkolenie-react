import { useState, useEffect } from "react";
import "./Movie.css";

const EditMovie = (props) => {
  const [scoreError, setScoreError] = useState(undefined);
  const [typeError, setTypeError] = useState(undefined);
  const [genreError, setGenreError] = useState(undefined);
  const [titleError, setTitleError] = useState(undefined);
  const [yearOfReleaseError, setYearOfReleaseError] = useState(undefined);

  const [formData, setFormData] = useState(props.selectedMovie);

  useEffect(()=>{
    console.log('movie edited, props changed');
    console.log(JSON.stringify(props.selectedMovie))
    setFormData(props.selectedMovie);
  }, [props.selectedMovie]); // does not work 

  const handleSubmit = (event) => {
    event.preventDefault();
    if (genreError === '' && titleError === '' && yearOfReleaseError === '') {
      // setMovies(movies.concat({ ...formData, id: Date.now() }));
    }
  };

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;

    setScoreError(name === 'score' && target.value >= 0 && target.value <= 10 ? '' : 'Niepoprawna ocena');
    setTypeError(name === 'type' && target.value.length === 0 ? 'Niepoprawny typ' : '');
    setTitleError(name === 'title' && target.value.length === 0 ? 'Niepoprawny format email' : '');
    setGenreError(name === 'genre' && target.value === undefined ? 'Niepoprawny wybór gatunku' : '')
    setYearOfReleaseError(name === 'yearOfRelease' && target.value < 1900 ? 'Niepoprawny rok wydania' : '');

    setFormData((prevDataForm) => {
      return { ...prevDataForm, [name]: target.value };
    });
  };

  return (
    <div className="usersList">
      <p>{JSON.stringify(formData)}</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Tytuł</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Tytuł"
          onChange={handleInputChange}
          value={formData.title}
        />
        <p>{titleError}</p>
        <label htmlFor="genre">Gatunek</label>
        <input
          type="select"
          id="genre"
          name="genre"
          placeholder="Gatunek"
          onChange={handleInputChange}
          value={formData.genre}
        />
        <p>{genreError}</p>
        <label htmlFor="yearOfRelease">Rok wydania</label>
        <input
          type="number"
          id="yearOfRelease"
          name="yearOfRelease"
          placeholder="Rok wydania"
          onChange={handleInputChange}
          value={formData.yearOfRelease}
        />
        <p>{yearOfReleaseError}</p>
        <label htmlFor="score">Ocena</label>
        <input
          type="number"
          id="score"
          name="score"
          placeholder="Ocena"
          onChange={handleInputChange}
          value={formData.score}
        />
        <p>{scoreError}</p>
        <label htmlFor="type">Typ</label>
        <input
          type="radiobutton"
          id="type"
          name="type"
          placeholder="Typ"
          onChange={handleInputChange}
          value={formData.type}
        />
        <p>{typeError}</p>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditMovie;