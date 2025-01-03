import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axiosClient from "../utilities/axiosClient";
import { Action } from "./CustomerDetails";

const EditAction = () => {
    const params = useParams()
    const navigate = useNavigate();
    const [formData, setFormData] = useState<Action | undefined>();
    const [axiosError, setAxiosError] = useState<string>();
    const [error, setError] = useState<string>();
    const [emailError, setEmailError] = useState<string>();

    useEffect(() => {
        axiosClient
            .get(`/actions/${params.id}`)
            .then(res => {
                const data = res.data.data.find((p: Action) => p._id === params.actionId);
                setFormData(data);
            }).catch(error => {
                setAxiosError(error.message);
            })
    }, [params.id, params.actionId]);

    const isValidEmail = (email: string) => /\S+@\S+\.\S+/.test(email);

    const handleSubmit = (event: FormEvent<HTMLElement>) => {
        event.preventDefault();
        setAxiosError("");
        axiosClient
            .put<Action>(
                `/actions/${params.actionId}`,
                { ...formData, customer: params.id }
            )
            .then(() => navigate(`/customers/${params.id}`))
            .catch((error) => setAxiosError(JSON.stringify(error.message)));
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        if (name === "description") {
            setError(value.length < 4 ? "Opis musi mieć 4 lub więcej znaków" : "");
        } else if (name === "email") {
            setEmailError(isValidEmail(value) ? "" : "Niepoprawny format email");
        }
        setFormData(prevDataForm => ({ ...prevDataForm, [name]: value } as Action));
    };

    return (
        <>
            <h1>Action edit</h1>
            <p>ID: {params.actionId}</p>
            <p>CustomerID: {params.id}</p>
            <button onClick={() => navigate(`/customers/${params.id}`)}>Wróć</button>
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
                <button type="submit">Zapisz</button>
                <p style={{ color: "red" }}>{axiosError}</p>
            </form>
        </>
    )
}

export default EditAction;