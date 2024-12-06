import Filters from './Filters';
import WeatherList from './WeatherList';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = (props) => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        // Fetching data from API
        axios.get('https://danepubliczne.imgw.pl/api/data/synop')
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
        <div style={{ border: '1px solid black' }}>
            <Filters />
            <WeatherList items={posts}/>
        </div>
    );
}

export default Home;