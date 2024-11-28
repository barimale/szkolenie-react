import { useState } from "react";
import "./SignIn.css";

const SignIn = () => {
  const [error, setError] = useState(undefined);
  const [ageError, setAgeError] = useState(undefined);
  const [nameError, setNameError] = useState(undefined);
  const [surnameError, setSurnameError] = useState(undefined);

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    wiek: "",
    zgoda: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (error === '' && ageError === '' && nameError === '' && surnameError === '' && formData.zgoda === true) {
      console.log(JSON.stringify(formData));
    }
  };

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;

    // zgoad nie zapisuje sie do formData
    if (name === 'zgoda' && target.value === false) {
      setError('Zgoda musi byc wyrazona');
    }
    else if (name === 'zgoda' && target.value === true) {
      setError('');
    }
    else if (name === 'wiek' && target.value < 18) {
      setAgeError('Niepoprawny wiek');
    }
    else if (name === 'wiek' && target.value >= 18) {
      setAgeError('');
    }
    else if (name === 'name' && target.value === '') {
      setNameError('Niepoprawne imię');
    }
    else if (name === 'name' && target.value !== '') {
      setNameError('');
    }
    else if (name === 'surname' && target.value === '') {
      setSurnameError('Niepoprawne nazwisko');
    }
    else if (name === 'surname' && target.value !== '') {
      setSurnameError('');
    }
    setFormData((prevDataForm) => {
      return { ...prevDataForm, [name]: target.value };
    });
  };

  return (
    <div className="usersList">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Imię</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="name"
          onChange={handleInputChange}
          value={formData.name}
        />
        <p>{nameError}</p>
        <label htmlFor="surname">Nazwisko</label>
        <input
          type="text"
          id="surname"
          name="surname"
          placeholder="surname"
          onChange={handleInputChange}
          value={formData.surname}
        />
        <p>{surnameError}</p>
        <label htmlFor="number">Wiek</label>
        <input
          type="number"
          id="wiek"
          name="wiek"
          placeholder="wiek"
          onChange={handleInputChange}
          value={formData.email}
        />
        <p>{ageError}</p>
        <label htmlFor="checkbox">Wyrażenie zgody</label>
        <input
          type="checkbox"
          id="zgoda"
          name="zgoda"
          placeholder="zgoda"
          onChange={handleInputChange}
          value={formData.zgoda}
        />
        <p>{error}</p>
        <button type="submit">Zarejestruj</button>
      </form>
    </div>
  );
};

export default SignIn;