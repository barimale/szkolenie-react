import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axiosClient from "../utilities/axiosClient";
import { Action } from "./CustomerDetails";

const EditAction = () => {
    const params = useParams()
    const navigate = useNavigate();
    const [formData, setFormData] = useState<Action>();
    const [axiosError, setAxiosError] = useState<string>();
    const [error, setError] = useState<string>();
    const [emailError, setEmailError] = useState<string>();

    useEffect(() => {
        axiosClient
            .put(`/actions/${params.id}`) //?page=1&limit=10
            .then(res => {
                const data = res.data.data.find((p: Action) => p._id === params.actionId);
                console.log(JSON.stringify(data))
                setFormData(data);
                // WIP
            }).catch(error => {
                console.log(error)
            })
    }, [])

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
            <h1>Action edit</h1>
            <p>ID: {params.actionId}</p>
            <p>CustomerID: {params.id}</p>
            <button onClick={() => navigate(`/customers/${params.id}`)}>Wroc</button>
            <form onSubmit={handleSubmit}>
                <label htmlFor="date">date: </label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    placeholder="date"
                    onChange={handleInputChange}
                    value={formData?.date}
                />
                <br />
                <label htmlFor="description">description: </label>
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
                <label htmlFor="type">type: </label>
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