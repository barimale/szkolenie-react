import { useState } from 'react';
import Child from './Child';
import Display from './Display';

const Message = () => {
    const [value, setValue] = useState('');
    const passValue = (item) => {
        setValue(item);
    };

    return (
        <>
        <Display value={value} />
        <Child passValue={passValue}/>
        </>
    );
}

export default Message;
