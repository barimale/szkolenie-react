import Filters from './Filters';
import WeatherList from './WeatherList';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    const [posts, setPosts] = useState([])
    const [filteredItems, setFilteredItems] = useState(posts)
    const [filter, setFilter] = useState();
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(()=>{
      if(filter !== '')
      {
        const filtered = posts.filter(p=> p.stacja.includes(filter));
        setFilteredItems(filtered);  
      }else{
        setFilteredItems(posts);  
      }
    },[posts, filter]);

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
      }, [])
     
      if (loading) return <p>Loading...</p>
      if (error) return <p>{error}</p>

    return (
        <div style={{ border: '1px solid black' }}>
            <Filters OnFilterChanged={(item)=>setFilter(item)}/>
            <WeatherList items={filteredItems}/>
        </div>
    );
}

export default Home;