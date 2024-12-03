import { useState } from 'react';

const useClickCounter = (initialValue = 0) => {
    const [counter, setCounter] = useState(initialValue);

    const increment = () =>{
        setCounter((prev) => prev + 1);
    }

    return [counter, increment];
}

export default useClickCounter;