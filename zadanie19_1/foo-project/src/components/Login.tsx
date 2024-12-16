import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router';

const Login = () => {
    const [axiosError, setAxiosError] = useState<string | undefined>(undefined);
    const [error, setError] = useState<string | undefined>(undefined);
    const [emailError, setEmailError] = useState<string | undefined>(undefined);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const isValidEmail = (email: any) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        setAxiosError('');
        if (error === '' && emailError === '') {
            axios.post('https://crm-app-akademia108-bf1127afa289.herokuapp.com/auth/login', {
                email: formData.email,
                password: formData.password
            })
                .then(p => {
                    console.log(JSON.stringify(p.data))
                    localStorage.setItem('authToken', p.data.jwt)
                    navigate(`/`);
                })
                .catch(error => {
                    setAxiosError(error.message);
                })
        }
    };

    const handleInputChange = (e: any) => {
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
        <div style={{ border: '1px solid black', margin: '20px', boxShadow: '10px 5px 5px red' }}>
            <h1>Login</h1>
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
                <p style={{color: 'red'}}>{axiosError}</p>
            </form>
        </div>)
}

export default Login;
