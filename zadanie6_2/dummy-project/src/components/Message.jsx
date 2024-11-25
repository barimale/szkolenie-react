import { useState } from 'react';

const Message = () => {
    const [isVisible, setIsVisible] = useState(false);
    const show = () =>{
        setIsVisible(true);
    };

    const hide = () => {
        setIsVisible(false);
    };

    return (
        <>
            <button onClick={show}>Pokaż wiadomość</button>
            <button onClick={hide}>Ukryj wiadomość</button>
            {isVisible &&
                (
                    <p>"Witaj w React!"</p>
                )}
            {!isVisible &&
                (
                    <p></p>
                )}
        </>
    );
}

export default Message;
