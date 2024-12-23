import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router";
import { Customer } from "./Home";
import axiosClient from "../utilities/axiosClient";

const NewCustomer = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState<Customer>();
    const [axiosError, setAxiosError] = useState<string>();
    const [error, setError] = useState<string>();

    const handleSubmit = (event: FormEvent<HTMLElement>) => {
        event.preventDefault();
        setAxiosError("");
        console.log(JSON.stringify(formData))
        axiosClient
            .post<Customer>(
                "/customers",
                {...formData, actions: []}
            )
            .then(() => {
                navigate('/');
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

    const handleInputAddressChange = (e: ChangeEvent<HTMLInputElement>) => {
        const target = e.target;
        const name = target.name;
    
        setFormData((prevDataForm: any) => {
          return {
            ...prevDataForm,
            address: { ...prevDataForm?.address, [name]: target.value },
          };
        });
      };

    return (<>
        <h1>Nowy klient</h1>
        <button onClick={() => { navigate('/') }}>Wróć</button>
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nazwa: </label>
            <input
                type="text"
                id="name"
                name="name"
                placeholder="Customer name"
                onChange={handleInputChange}
                value={formData?.name}
            />
            <br />
            <label htmlFor="nip">NIP: </label>
            <input
                type="text"
                id="nip"
                name="nip"
                placeholder="Customer nip"
                onChange={handleInputChange}
                value={formData?.nip}
            />
            <br />
            <label htmlFor="address1">Adres - miasto: </label>
            <input
                type="text"
                id="address1"
                name="city"
                placeholder="Customer address city"
                onChange={handleInputAddressChange}
                value={formData?.address?.city}
            />
            <br />
            <label htmlFor="postcode">Adres - kod pocztowy: </label>
            <input
                type="text"
                id="postcode"
                name="postcode"
                placeholder="Customer address postcode"
                onChange={handleInputAddressChange}
                value={formData?.address?.postcode}
            />
            <br />
            <label htmlFor="street">Adres - ulica: </label>
            <input
                type="text"
                id="street"
                name="street"
                placeholder="Customer address street"
                onChange={handleInputAddressChange}
                value={formData?.address?.street}
            />
            <br />
            <label htmlFor="suite">Adres - numer: </label>
            <input
                type="text"
                id="suite"
                name="suite"
                placeholder="Customer address suite"
                onChange={handleInputAddressChange}
                value={formData?.address?.suite}
            />
            <p>{error}</p>
            <button type="submit">Stwórz</button>
            <p style={{ color: "red" }}>{axiosError}</p>
        </form>
    </>)
}

export default NewCustomer;