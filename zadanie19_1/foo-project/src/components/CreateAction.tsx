import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { Customer } from "./Home";
import { Action } from "./CustomerDetails";
import axiosClient from "../utilities/axiosClient";

const CreateAction = () => {
    const params = useParams()
    const navigate = useNavigate();
    const [formData, setFormData] = useState<Action>();
    const [axiosError, setAxiosError] = useState<string>();
    const [error, setError] = useState<string>();

    const handleSubmit = (event: FormEvent<HTMLElement>) => {
        event.preventDefault();
        setAxiosError("");
        console.log(JSON.stringify(formData))
        axiosClient
            .post<Customer>(
                "/actions",
                { ...formData }
            )
            .then((res) => {
            })
            .catch((error) => {
                setAxiosError(JSON.stringify(error.message));
            });
    };

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const target = e.target;
        const name = target.name;
        if (name === "name" && target.value.length < 4) {
            setError("Nazwa musi mieć 4 lub więcej znaków");
        } else if (name === "name" && target.value.length >= 4) {
            setError("");
        }
        setFormData((prevDataForm: any) => {
            return { ...prevDataForm, [name]: target.value };
        });
    };

    return (
        <>
            <h1>Action create</h1>
            <p>ID: {params.id}</p>
            <button onClick={()=> navigate(`/customers/${params.id}`)}>Wroc</button>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Customer name: </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Customer name"
                    onChange={handleInputChange}
                    value={formData?.customer}
                /><br />
                <label htmlFor="date">date: </label>
                <input
                    type="text"
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
                <label htmlFor="type">type: </label>
                <input
                    type="text"
                    id="type"
                    name="type"
                    placeholder="type"
                    onChange={handleInputChange}
                    value={formData?.type}
                />
                <br />
                <button type="submit">Stworz</button>

            </form>
        </>
    )
}

export default CreateAction;