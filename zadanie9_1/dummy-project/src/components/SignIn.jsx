import { useState } from "react";
import "./SignIn.css";

const SignIn = () => {
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if(error === '')
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
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default SignIn;