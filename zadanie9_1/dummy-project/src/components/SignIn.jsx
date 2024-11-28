import { useState } from "react";
import "./SignIn.css";

const SignIn = () => {
  const [error, setError] = useState(undefined);
  const [emailError, setEmailError] = useState(undefined);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(error === '' && emailError === '')
    {
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
    else if (name === 'email' && !isValidEmail(target.value)) {
      setEmailError('Niepoprawny format email');
    }
    else if (name === 'email' && isValidEmail(target.value)) {
      setEmailError('');
    }
    setFormData((prevDataForm) => {
      return { ...prevDataForm, [name]: target.value };
    });
  };

  return (
    <div className="usersList">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">User email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="User email"
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
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default SignIn;