import { useNavigate } from 'react-router';
import apiClient from '../utilities/axiosClient';
import { useEffect, useMemo, useState } from 'react';
import Pagination from './Pagination';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/userSlice';
import styled from 'styled-components'

const FlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    border: 1px solid black;
    margin: 20px;
    padding: 20px;
`

const FlexItem = styled.div`
    border: 1px solid black;
    padding: 20px; 
    border-radius: 15px;
`

export type Customer = {
    _id: string,
    name: string,
    nip: string,
    address: {
        street: string,
        suite: string,
        city: string,
        postcode: string
    }
    actions: string[]
}

type HomeProps = {
    onEdit: (item: Customer | undefined) => void
}
const Home = (props: HomeProps) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [items, setItems] = useState<Customer[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [pages, setPages] = useState(1);
    const limit = 3;

    useEffect(() => {
        apiClient.get(`/customers?page=${currentPage}&limit=${limit}`)
            .then(response => {
                setItems(response.data.data)
                setPages(response.data.pages)
                setLoading(false)
            })
            .catch(error => {
                setError(`An error occurred while fetching data: ${error}`)
                setLoading(false)
            })
    }, [])

    useEffect(() => {
        apiClient.get(`/customers?page=${currentPage}&limit=${limit}`)
            .then(response => {
                setItems(response.data.data)
                setPages(response.data.pages)
                setLoading(false)
            })
            .catch(error => {
                setError(`An error occurred while fetching data: ${error}`)
                setLoading(false)
            })
    }, [currentPage, limit])

    const GoToDetails = (itemId: string) => {
        navigate(`/customers/${itemId}`);
    }

    const Logout = () => {
        localStorage.removeItem('user');
        dispatch(setUser(null));
        navigate(`/login`);
    }

    const removeClient = (clientId: string) => {
        apiClient.delete(`/customers/${clientId}`)
            .then(() => {
                const removed = items.filter(p => p._id !== clientId)
                setItems(removed)
            })
            .catch(error => {
                setError(`An error occurred while fetching data: ${error}`)
            })
            .then(() => {
                apiClient.get(`/customers?page=${currentPage}&limit=${limit}`)
                    .then(response => {
                        setItems(response.data.data)
                        setPages(response.data.pages)
                        setLoading(false)
                    })
                    .catch(error => {
                        setError(`An error occurred while fetching data: ${error}`)
                        setLoading(false)
                    })
            })
    }

    useEffect(() => {
        props.onEdit(undefined);
    }, []);

    const itemsList = useMemo(() => items.map((item, index) => {
        return <FlexItem key={index}>
            <p style={{ cursor: 'pointer' }} ><b>{item.name}</b></p>
            <button onClick={() => props.onEdit(item)}>Edytuj</button>
            <button onClick={() => GoToDetails(item._id)}>Szczegóły</button>
            <button onClick={() => removeClient(item._id)}>Usuń</button>
        </FlexItem>
    }), [items])

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    return (
        <>
            <button onClick={() => Logout()}>Wyloguj</button>
            <h1>Strona główna</h1>
            <button onClick={() => { navigate(`/customers/new`); }}>Stwórz klienta</button>
            {items.length > 0 && (
                <FlexContainer>{itemsList}</FlexContainer>
            )}
            {items.length === 0 && (
                <p>Brak klientów w systemie.</p>
            )
            }
            <Pagination
                currentPage={currentPage}
                totalPages={pages}
                onPageChange={setCurrentPage}
            />
        </>)
}

export default Home;