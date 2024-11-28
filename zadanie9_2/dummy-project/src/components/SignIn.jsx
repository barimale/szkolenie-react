import { useState } from "react";
import "./SignIn.css";

const SignIn = () => {
  const [error, setError] = useState(undefined);
  const [emailError, setEmailError] = useState(undefined);
  const [nameError, setNameError] = useState(undefined);
  const [surnameError, setSurnameError] = useState(undefined);

  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    wiek: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (error === '' && emailError === '') {
      console.log('Zalogowano pomyślnie.')
    }
  };

  const handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    if (name === 'password' && target.value.length < 8) {
      setError('Hasło musi mieć 8 lub więcej znaków');
    }
    else if (name === 'password' && target.value.length >= 8) {
      setError('');
    }
    else if (name === 'wiek' && target.value < 18) {
      setEmailError('Niepoprawny wiek');
    }
    else if (name === 'wiek' && target.value >= 18) {
      setEmailError('');
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
        <label htmlFor="surname">Nazwisko</label>
        <input
          type="text"
          id="surname"
          name="surname"
          placeholder="surname"
          onChange={handleInputChange}
          value={formData.surname}
        />
        <label htmlFor="number">Wiek</label>
        <input
          type="number"
          id="wiek"
          name="wiek"
          placeholder="wiek"
          onChange={handleInputChange}
          value={formData.email}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          onChange={handleInputChange}
          value={formData.password}
        />
        <p>{error}</p>
        <p>{emailError}</p>
        <p>{nameError}</p>
        <p>{surnameError}</p>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default SignIn;