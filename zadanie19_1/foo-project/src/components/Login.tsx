import { useState } from "react";
import { useNavigate } from 'react-router';
import { useDispatch } from "react-redux";
import { login } from '../store/customerSlice';

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

    const isValidEmail = (email: any) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        setAxiosError('');
        if (error === '' && emailError === '') {
            dispatch(login(formData));
        }
    };

    const handleInputChange = (e: any) => {
        const target = e.target;
        const name = target.name;
        if (name === 'password' && target.value.length < 4) {
            setError('Hasło musi mieć 4 lub więcej znaków');
        }
        else if (name === 'password' && target.value.length >= 4) {
            setError('');
        }
        else if (name === 'email' && isValidEmail(target.value)) {
            setEmailError('');
        }
        else if (name === 'email' && !isValidEmail(target.value)) {
            setEmailError('Niepoprawny format email');
        }
        setFormData((prevDataForm) => {
            return { ...prevDataForm, [name]: target.value };
        });
    };

    return (
        <div style={{ border: '1px solid black', padding: '60px'}}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">User email: </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="User email"
                    onChange={handleInputChange}
                    value={formData.email}
                />
                <br />
                <label htmlFor="password">Password: </label>
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
                <p style={{cursor: 'pointer', color: 'blue'}} onClick={()=>{
                    navigate(`/signup`);
                }}>Stworz konto</p>
                <button type="submit">Zaloguj</button>
                <p style={{color: 'red'}}>{axiosError}</p>
            </form>
        </div>)
}

export default Login;
