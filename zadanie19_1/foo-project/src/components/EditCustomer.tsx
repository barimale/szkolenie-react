import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router";
import { Customer } from "./Home";
import axiosClient from "../utilities/axiosClient";

type EditCustomerProps = {
    customer: Customer | undefined
}

const EditCustomer = (props: EditCustomerProps) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState<Customer | undefined>(props.customer);
    const [axiosError, setAxiosError] = useState<string>();
    const [error, setError] = useState<string>();

    const handleSubmit = (event: FormEvent<HTMLElement>) => {
        event.preventDefault();
        setAxiosError("");
        console.log(JSON.stringify(formData))
        axiosClient
            .put<Customer>(
                `/customers/${formData?._id}`,
                { ...formData }
            )
            .then((res) => {
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
        <h1>Edit Customer</h1>
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
            <label htmlFor="nip">Customer nip: </label>
            <input
                type="text"
                id="nip"
                name="nip"
                placeholder="Customer nip"
                onChange={handleInputChange}
                value={formData?.nip}
            />
            <br />
            <label htmlFor="address1">Customer address city: </label>
            <input
                type="text"
                id="address1"
                name="city"
                placeholder="Customer address city"
                onChange={handleInputAddressChange}
                value={formData?.address?.city}
            />
            <br />
            <label htmlFor="postcode">Customer address postcode: </label>
            <input
                type="text"
                id="postcode"
                name="postcode"
                placeholder="Customer address postcode"
                onChange={handleInputAddressChange}
                value={formData?.address?.postcode}
            />
            <br />
            <label htmlFor="street">Customer address street: </label>
            <input
                type="text"
                id="street"
                name="street"
                placeholder="Customer address street"
                onChange={handleInputAddressChange}
                value={formData?.address?.street}
            />
            <br />
            <label htmlFor="suite">Customer address suite: </label>
            <input
                type="text"
                id="suite"
                name="suite"
                placeholder="Customer address suite"
                onChange={handleInputAddressChange}
                value={formData?.address?.suite}
            />
            <p>{error}</p>
            <button type="submit">Stworz</button>
            <p style={{ color: "red" }}>{axiosError}</p>
        </form>
    </>)
}

export default EditCustomer;