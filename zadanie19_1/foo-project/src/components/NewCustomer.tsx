import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router";
import { Customer } from "./Home";
import axiosClient from "../utilities/axiosClient";

const NewCustomer = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState<Customer>();
    const [axiosError, setAxiosError] = useState<string>();
    const [error, setError] = useState<string>();
    const [emailError, setEmailError] = useState<string>();

    const isValidEmail = (email: string) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const handleSubmit = (event: FormEvent<HTMLElement>) => {
        event.preventDefault();
        setAxiosError("");
        axiosClient
            .post<Customer>(
                "/customers",
                formData
            )
            .then((res) => {
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
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
        setFormData((prevDataForm: any) => {
            return { ...prevDataForm, [name]: target.value };
        });
    };

    return (<>
        <h1>New Customer</h1>
        <button onClick={() => { navigate('/') }}>Wróć</button>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Customer name: </label>
            <input
                type="text"
                id="name"
                name="name"
                placeholder="Customer name"
                onChange={handleInputChange}
                value={formData?.name}
            />
            <br />
            <label htmlFor="npm">Customer npm: </label>
            <input
                type="text"
                id="npm"
                name="npm"
                placeholder="Customer npm"
                onChange={handleInputChange}
                value={formData?.npm}
            />
            <br />
            <label htmlFor="address1">Customer address city: </label>
            <input
                type="text"
                id="address1"
                name="address1"
                placeholder="Customer address city"
                onChange={handleInputChange}
                value={formData?.address.city}
            />
            <br />
            <label htmlFor="postcode">Customer address postcode: </label>
            <input
                type="text"
                id="postcode"
                name="postcode"
                placeholder="Customer address postcode"
                onChange={handleInputChange}
                value={formData?.address.postcode}
            />
            <br />
            <label htmlFor="street">Customer address street: </label>
            <input
                type="text"
                id="street"
                name="street"
                placeholder="Customer address street"
                onChange={handleInputChange}
                value={formData?.address.street}
            />
            <br />
            <label htmlFor="suite">Customer address suite: </label>
            <input
                type="text"
                id="suite"
                name="suite"
                placeholder="Customer address suite"
                onChange={handleInputChange}
                value={formData?.address.suite}
            />
            <p>{error}</p>
            <p>{emailError}</p>
            <Link style={{ cursor: "pointer", color: "blue" }} to="/signup">
                Stworz konto
            </Link>
            <button type="submit">Zaloguj</button>
            <p style={{ color: "red" }}>{axiosError}</p>
        </form>
    </>)
}

export default NewCustomer;