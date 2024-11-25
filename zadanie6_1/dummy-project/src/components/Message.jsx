import { useState } from 'react';

const Message = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <button onClick={setIsVisible(true)}>Pokaż wiadomość</button>
            <button onClick={setIsVisible(false)}>Ukryj wiadomość</button>
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
