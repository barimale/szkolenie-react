import { useState, useEffect, useRef } from "react";
import "./Movie.css";

const EditMovie = (props) => {
  const [scoreError, setScoreError] = useState(undefined);
  const [typeError, setTypeError] = useState(undefined);
  const [genreError, setGenreError] = useState(undefined);
  const [titleError, setTitleError] = useState(undefined);
  const [yearOfReleaseError, setYearOfReleaseError] = useState(undefined);

  const [formData, setFormData] = useState(props.selectedMovie);

  const radioMoviesRef = useRef(null);
  const radioSeriesRef = useRef(null);

  useEffect(() => {
    if (formData.type === 'series') {
      radioMoviesRef.current.checked = false;
      radioSeriesRef.current.checked = true;
    } else if (formData.type === 'movies') {
      radioMoviesRef.current.checked = true;
      radioSeriesRef.current.checked = false;
    }
  }, [formData]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if ((genreError === '' || genreError === undefined)
      && (titleError === '' || titleError === undefined)
      && (yearOfReleaseError === '' || yearOfReleaseError === undefined)
      && (scoreError === '' || scoreError === undefined)
      && (typeError === '' || typeError === undefined)) {
      props.OnMoviesChanged([formData]);
    }
  };

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;

    if (name === "type-series") {
      if (radioMoviesRef.current) {
        radioMoviesRef.current.checked = false;
      }
      setTypeError(radioSeriesRef.current.checked === false && radioMoviesRef.current.checked === false ? 'Niepoprawny typ' : '');
      setFormData((prevDataForm) => {
        return { ...prevDataForm, ['type']: target.value };
      });
    } else if (name === "type-movies") {
      if (radioSeriesRef.current) {
        radioSeriesRef.current.checked = false;
      }
      setTypeError(radioSeriesRef.current.checked === false && radioMoviesRef.current.checked === false ? 'Niepoprawny typ' : '');
      setFormData((prevDataForm) => {
        return { ...prevDataForm, ['type']: target.value };
      });
    } else {
      setScoreError(name === 'score' && (target.value < 0 || target.value > 10) ? 'Niepoprawna ocena' : '');
      setTitleError(name === 'title' && target.value.length === 0 ? 'Niepoprawny format email' : '');
      setGenreError(name === 'genre' && target.value === '' ? 'Niepoprawny wybór gatunku' : '')
      setYearOfReleaseError(name === 'yearOfRelease' && (target.value < 1900 || target.value > new Date().getFullYear()) ? 'Niepoprawny rok wydania' : '');

      setFormData((prevDataForm) => {
        return { ...prevDataForm, [name]: target.value };
      });
    }
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
        <select
          type="select"
          id="genre"
          name="genre"
          placeholder="Gatunek"
          onChange={handleInputChange}
          value={formData.genre}
        >
          <option value="">Wybierz...</option>
          <option value="Komedia">Komedia</option>
          <option value="Dramat">Dramat</option>
          <option value="Akcja">Akcja</option>
        </select>
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
        <p>Typ</p>
        <label htmlFor="type-movies">Film</label>
        <input
          type="radio"
          name="type-movies"
          value="movies"
          onChange={handleInputChange}
          ref={radioMoviesRef}
        />
        <label htmlFor="type-series">Serial</label>
        <input
          type="radio"
          name="type-series"
          value="series"
          onChange={handleInputChange}
          ref={radioSeriesRef}
        />
        <p>{typeError}</p>
        <button type="submit">Zapisz</button>
        <button onClick={() => {
          props.onCancel();
        }}>Anuluj</button>
      </form>
    </div>
  );
};

export default EditMovie;