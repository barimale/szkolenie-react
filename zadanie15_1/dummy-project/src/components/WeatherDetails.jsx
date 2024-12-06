import { useParams, useNavigate } from 'react-router';
import { useState, useEffect } from 'react';
import axios from 'axios';

const WeatherDetails = () => {
    const navigate = useNavigate();
    const params = useParams()
    const [posts, setPosts] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        // Fetching data from API
        axios.get(`https://danepubliczne.imgw.pl/api/data/synop/id/${params.id}`)
            .then(response => {
                setPosts(response.data) // Setting data in state
                setLoading(false)
            })
            .catch(error => {
                setError('An error occurred while fetching data')
                setLoading(false)
            })
    }, []) // Empty array means the effect will run only once after the component mounts

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>
    return (
        <>
            <h2>{posts.stacja}</h2>
            <p>data_pomiaru: {posts.data_pomiaru}</p>
            <p>godzina_pomiaru: {posts.godzina_pomiaru}</p>
            <p>temperatura: {posts.temperatura}</p>
            <p>predkosc_wiatru: {posts.predkosc_wiatru}</p>
            <p>kierunek_wiatru: {posts.kierunek_wiatru}</p>
            <p>wilgotnosc_wzgledna: {posts.wilgotnosc_wzgledna}</p>
            <p>suma_opadu: {posts.suma_opadu}</p>
            <button onClick={() => { navigate('/') }}>Wróć</button>
        </>);
}

export default WeatherDetails;