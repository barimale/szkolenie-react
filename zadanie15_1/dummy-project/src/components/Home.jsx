import Filters from './Filters';
import WeatherList from './WeatherList';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    const [items, setItems] = useState([])
    const [filteredItems, setFilteredItems] = useState(items)
    const [filter, setFilter] = useState('');
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        axios.get('https://danepubliczne.imgw.pl/api/data/synop')
          .then(response => {
            setItems(response.data)
            setLoading(false)
          })
          .catch(error => {
            setError(`An error occurred while fetching data: ${error}`)
            setLoading(false)
          })
      }, [])

      useEffect(()=>{
        if(filter !== '')
        {
          const filtered = items.filter(p=> p.stacja.toString().toLowerCase().startsWith(filter.toString().toLowerCase()));
          setFilteredItems(filtered);
        }else{
          setFilteredItems(items);  
        }
      },[items, filter]);
     
      if (loading) return <p>Loading...</p>
      if (error) return <p>{error}</p>

    return (
        <div style={{ border: '1px solid black' }}>
            <Filters initialFilter={filter} OnFilterChanged={(item)=>setFilter(item)}/>
            <WeatherList items={filteredItems}/>
        </div>
    );
}

export default Home;