import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import Pagination from './Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { getCustomers, logout } from '../store/customerSlice';

type Customer = {
    _id: string,
    name: string,
    npm: string,
    actions: string[]
}
const Home = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [limit, setLimit] = useState(1);
    const dispatch = useDispatch();
    const [jwtError, customers] = useSelector((state: any) => state.error)

    useEffect(() => {
        dispatch(getCustomers(currentPage, limit));
        if (jwtError === '') {
            setLoading(false)
        } else {
            setError(jwtError);
            setLoading(false)
        }
    }, [])

    const GoToDetails = (itemId: string) => {
        navigate(`/customers/${itemId}`);
    }

    const Logout = () => {
        dispatch(logout())
        navigate(`/login`);
    }

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    return (
        <>
            <button onClick={() => Logout()}>Wyloguj</button>
            <h1>Home</h1>
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '20px',
                border: '1px solid black',
                margin: '20px'
            }}>{customers.map((item: any, index: any) => {
                return <div style={{ border: '1px solid black', padding: '20px' }}>
                    <p key={index} style={{ cursor: 'pointer' }} ><b>{item.name}</b></p>
                    <button onClick={() => GoToDetails(item._id)}>Szczegóły</button>
                </div>
            })}</div>
            <Pagination
                currentPage={currentPage}
                totalPages={limit}
                onPageChange={setCurrentPage}
            />
        </>)
}

export default Home;