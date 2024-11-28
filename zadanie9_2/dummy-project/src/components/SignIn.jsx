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
    age: "",
    agreement: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (error === '' && ageError === '' && nameError === '' && surnameError === '' && error === '') {
      console.log(JSON.stringify(formData));
    }
  };

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;

    setError(name === 'agreement'  && target.checked === false ? 'Zgoda musi byc wyrażona' : '');
    setAgeError(name === 'age' && target.value < 18 ? 'Niepoprawny wiek' : '');
    setNameError(name === 'name' && target.value === '' ? 'Niepoprawne imię' : '');
    setSurnameError(name === 'surname' && target.value === '' ? 'Niepoprawne nazwisko' : '');

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
          id="age"
          name="age"
          placeholder="age"
          onChange={handleInputChange}
          value={formData.age}
        />
        <p>{ageError}</p>
        <label htmlFor="checkbox">Wyrażenie zgody</label>
        <input
          type="checkbox"
          id="agreement"
          name="agreement"
          placeholder="agreement"
          value={Boolean(formData.agreement)}
          onChange={handleInputChange}
        />
        <p>{error}</p>
        <button type="submit">Zarejestruj</button>
      </form>
    </div>
  );
};

export default SignIn;