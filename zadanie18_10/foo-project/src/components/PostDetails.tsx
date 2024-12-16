import { useNavigate, useParams } from "react-router";
import { Post } from "./PostList";
import { useEffect, useState } from "react";
import axios from "axios";

type Company = {
    name: string,
    catchPhrase: string,
    bs: string,
}

type Address = {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: {}
}

type User = {
    id: string,
    name: string,
    email: string,
    website: string,
    username: string,
    phone: string,
    company: Company,
    address: Address
}

const PostDetails = (props: any) => {
    const navigate = useNavigate();
    const params = useParams()
    const [item, setItem] = useState<Post>()
    const [userData, setUserData] = useState<User | null>(null);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [removeResult, setRemoveResult] = useState<string | null>(null)

    const goToCallback = () => {
        navigate(`/`);
    }

    const removeCallback = (itemId: string) => {
        setRemoveResult('');
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${itemId}`)
            .then((response) => setRemoveResult(JSON.stringify(response)));
    }

    const editCallback = (itemId: string) => {
        props.onEditCallback(item);
        navigate(`/posts/edit/${itemId}`);
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${Number(params.id)}`)
            .then(response => {
                setItem(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError(`An error occurred while fetching data: ${error}`);
                setLoading(false);
            })
    }, [])

    useEffect(() => {
        if (Number.isInteger(item?.userId)) {
            axios.get(`https://jsonplaceholder.typicode.com/users/${Number(item?.userId)}`)
                .then(response => {
                    setUserData(response.data)
                    setLoading(false)
                })
                .catch(error => {
                    setError(`An error occurred while fetching data: ${error}`)
                    setLoading(false)
                })
        }
    }, [item])

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    return (
        <>
            <h1>Nazwa: {item?.title}</h1>
            <p>Tresc: {item?.body}</p>
            <p>User:</p>
            <p>Name: {userData?.name}</p>
            <p>Email: {userData?.email}</p>
            <p>Website: {userData?.website}</p>
            <button onClick={() => removeCallback(item?.id ? item?.id.toString() : '')}>Usuń</button>
            <p>{removeResult}</p>
            <button onClick={() => editCallback(item?.id ? item?.id.toString() : '')}>Edycja</button>
            <button onClick={goToCallback}>Wróć</button>
        </>
    )
}

export default PostDetails;