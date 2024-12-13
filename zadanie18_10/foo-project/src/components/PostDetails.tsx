import { useNavigate, useParams } from "react-router";
import { Post } from "./PostList";
import { useEffect, useState } from "react";
import axios from "axios";

type User = {
    name: string,
    email: string,
    website: string
}

const PostDetails = () => {
    const navigate = useNavigate();
    const params = useParams()
    const [item, setItem] = useState<Post>()
    const [userData, setUserData] = useState<User | null>(null);
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const goToCallback = () => {
        navigate(`/`);
    }

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${Number(params.id)}`)
            .then(response => {
                setItem(response.data)
                setLoading(false)
            })
            .catch(error => {
                setError(`An error occurred while fetching data: ${error}`)
                setLoading(false)
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
            <button onClick={goToCallback}>Wróć</button>
        </>
    )
}

export default PostDetails;