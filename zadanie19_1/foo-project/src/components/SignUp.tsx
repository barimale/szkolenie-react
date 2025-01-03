import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router";
import styled from 'styled-components'

const SignupWrapper = styled.div`
    border: 1px solid black;
    padding: 60px;
`
const SignUp = () => {
  const [axiosError, setAxiosError] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const [nameError, setNameError] = useState<string | undefined>(undefined);
  const [emailError, setEmailError] = useState<string | undefined>(undefined);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
  });

  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (event: FormEvent<HTMLElement>) => {
    event.preventDefault();
    setAxiosError("");
    if (error === "" && emailError === "" && nameError === "") {
      axios
        .post(
          "https://crm-app-akademia108-bf1127afa289.herokuapp.com/auth/signup",
          {
            email: formData.email,
            password: formData.password,
            name: formData.name,
          }
        )
        .then(() => {
          navigate(`/login`);
        })
        .catch((error) => {
          setAxiosError(error.message);
        });
    }
  };

  const handleInputChange = (e:  ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const name = target.name;
    if (name === "password" && target.value.length < 4) {
      setError("Hasło musi mieć 4 lub więcej znaków");
    } else if (name === "password" && target.value.length >= 4) {
      setError("");
    } else if (name === "email" && !isValidEmail(target.value)) {
      setEmailError("Niepoprawny format email");
    } else if (name === "email" && isValidEmail(target.value)) {
      setEmailError("");
    } else if (name === "name" && target.value.length > 4) {
      setNameError("");
    } else if (name === "name" && target.value.length <= 4) {
      setNameError("Niepoprawny format nazwy");
    }
    setFormData((prevDataForm) => {
      return { ...prevDataForm, [name]: target.value };
    });
  };

  return (
    <SignupWrapper>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Imię: </label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="User name"
          onChange={handleInputChange}
          value={formData.name}
        />
        <br />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="User email"
          onChange={handleInputChange}
          value={formData.email}
        />
        <br />
        <label htmlFor="password">Hasło: </label>
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
        <Link style={{ cursor: "pointer", color: "blue" }} to="/login">
          Idź do logowania
        </Link>
        <br />
        <button type="submit">Stwórz konto</button>
        <p style={{ color: "red" }}>{axiosError}</p>
      </form>
    </SignupWrapper>
  );
};

export default SignUp;
