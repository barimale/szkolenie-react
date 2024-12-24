import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";
import { Action } from "./CustomerDetails";
import axiosClient from "../utilities/axiosClient";

const CreateAction = () => {
    const params = useParams()
    const navigate = useNavigate();
    const [formData, setFormData] = useState<Action>();
    const [axiosError, setAxiosError] = useState<string>();
    const [error, setError] = useState<string>();
    const [emailError, setEmailError] = useState<string>();

    const isValidEmail = (email: string) => {
        return /\S+@\S+\.\S+/.test(email);
    };

    const handleSubmit = (event: FormEvent<HTMLElement>) => {
        event.preventDefault();
        setAxiosError("");
        console.log(JSON.stringify(formData))
        axiosClient
            .post<Action>(
                "/actions",
                { ...formData, customer: params.id }
            )
            .then(() => {
                navigate(`/customers/${params.id}`)
            })
            .catch((error) => {
                setAxiosError(JSON.stringify(error.message));
            });
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const target = e.target;
        const name = target.name;
        if (name === "description" && target.value.length < 4) {
            setError("Opis musi mieć 4 lub więcej znaków");
        } else if (name === "description" && target.value.length >= 4) {
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

    return (
        <>
            <h1>Stwórz akcję</h1>
            <p>ID: {params.id}</p>
            <Link to={`/customers/${params.id}`}>Wróć</Link>
            <form onSubmit={handleSubmit}>
                <label htmlFor="date">Data: </label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    placeholder="date"
                    onChange={handleInputChange}
                    value={formData?.date}
                />
                <br />
                <label htmlFor="description">Opis: </label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    placeholder="description"
                    onChange={handleInputChange}
                    value={formData?.description}
                />
                <br />
                <p>{error}</p>
                <label htmlFor="type">Typ: </label>
                <input
                    type="text"
                    id="type"
                    name="type"
                    placeholder="email"
                    onChange={handleInputChange}
                    value={formData?.type}
                />
                <br />
                <p>{emailError}</p>
                <button type="submit">Stwórz</button>
                <p style={{ color: "red" }}>{axiosError}</p>
            </form>
        </>
    )
}

export default CreateAction;