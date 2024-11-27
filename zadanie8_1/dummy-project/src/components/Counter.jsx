import { useState, useEffect } from 'react';

const Counter = () => {
    const [value, setValue] = useState(0);
    
    useEffect(()=>{
        const interval = setInterval(()=>{
            console.log('useEfect=>setInterval once per second');
            setValue(prevValue => {
                return prevValue + 1;
            });
        }, 1000);
        console.log('useEfect just once');

        return ()=>{
            console.log('useEfect deleted just once');
            clearInterval(interval);
        };
    },[])

    return (
        <>
        <p>{value}</p>
        </>
    );
}

export default Counter;
