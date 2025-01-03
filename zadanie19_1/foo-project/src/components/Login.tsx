import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router";
import { setUser, User } from "../store/userSlice";
import styled from 'styled-components'

const LoginWrapper = styled.div`
    border: 1px solid black;
    padding: 60px;
`

const Login = () => {
  const [axiosError, setAxiosError] = useState<string | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const [emailError, setEmailError] = useState<string | undefined>(undefined);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (event: FormEvent<HTMLElement>) => {
    event.preventDefault();
    setAxiosError("");
    axios
      .post<User>(
        "https://crm-app-akademia108-bf1127afa289.herokuapp.com/auth/login",
        {
          email: formData.email,
          password: formData.password,
        }
      )
      .then((res) => {
        dispatch(setUser(res.data));
        localStorage.setItem("user", JSON.stringify(res.data));
        navigate("/");
      })
      .catch((error) => {
        setAxiosError(error.message);
      });
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target;
    const name = target.name;
    if (name === "password" && target.value.length < 4) {
      setError("Hasło musi mieć 4 lub więcej znaków");
    } else if (name === "password" && target.value.length >= 4) {
      setError("");
    } else if (name === "email" && isValidEmail(target.value)) {
      setEmailError("");
    } else if (name === "email" && !isValidEmail(target.value)) {
      setEmailError("Niepoprawny format email");
    }
    setFormData((prevDataForm) => {
      return { ...prevDataForm, [name]: target.value };
    });
  };

  return (
    <LoginWrapper>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
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
        <Link style={{ color: "blue" }} to="/signup">
          Stwórz konto
        </Link>
        <br />
        <button type="submit">Zaloguj</button>
        <p style={{ color: "red" }}>{axiosError}</p>
      </form>
    </LoginWrapper>
  );
};

export default Login;
