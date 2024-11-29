import { useState } from "react";
import "./SignIn.css";

const SignIn = () => {
  const [genreError, setGenreError] = useState(undefined);
  const [titleError, setTitleError] = useState(undefined);
  const [yearOfReleaseError, setYearOfReleaseError] = useState(undefined);

  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    yearOfRelease: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (genreError === '' && titleError === '' && yearOfReleaseError === '') {
      console.log('Dodano do listy pomyślnie.')
    }
  };

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;

    setTitleError(name === 'title' && target.value.length === 0 ? 'Niepoprawny format email' : '');
    setGenreError(name === 'genre' && target.value === undefined ? 'Niepoprawny wybór gatunku' : '')
    setYearOfReleaseError(name === 'yearOfRelease' && target.value < 1900 ? 'Niepoprawny rok wydania' : '');

    setFormData((prevDataForm) => {
      return { ...prevDataForm, [name]: target.value };
    });
  };

  return (
    <div className="usersList">
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
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default SignIn;