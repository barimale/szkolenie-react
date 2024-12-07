import { useState, useEffect } from 'react';

const Filters = (props) => {
    const [filter, setFilter] = useState(props.initialFilter);

    const onChange = (e) =>{
        const target = e.target;
        setFilter(target.value);
    }

    useEffect(()=>{
        props.OnFilterChanged(filter);
    }, [filter]);

    return (
        <div style={{ border: '0px solid black', padding: '40px 20px 20px 20px' }}>
            <label>
                Szukaj: <input name="myInput" onChange={(event)=>{onChange(event)}}/>
            </label>
        </div>)
}

export default Filters;