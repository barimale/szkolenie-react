import { useState } from 'react';

const Message = () => {
    const [textStyle, setTextStyle] = useState({
        fontSize: 16, // w pikselach
        fontWeight: 'normal', // normalne lub pogrubione
         fontStyle: 'normal', // normalne lub kursywa
    });

    const sizeUp = () => {
        setTextStyle({...textStyle,fontSize: textStyle.fontSize + 2});

    }

    const sizeDown =() =>{
        setTextStyle({...textStyle,fontSize: textStyle.fontSize - 2});
    }

    const weightNormal = () =>{
        setTextStyle({...textStyle,fontWeight: 'normal'});
    }

    const weightBold = () =>{
        setTextStyle({...textStyle,fontWeight: 'bold'});
    }

    const styleItalic = () =>{
        setTextStyle({...textStyle,fontStyle: 'italic'});
    }

    const styleNormal = () =>{
        setTextStyle({...textStyle,fontStyle: 'normal'});
    }
    
    return (
        <>
        <button onClick={sizeUp}>Powiększ tekst</button>
        <button onClick={sizeDown}>Pomniejsz tekst</button>
        <button onCLick={weightBold}>Pogrub</button>
        <button onClick={weightNormal}>Odchudź</button>
        <button onClick={styleItalic}>Kursywa</button>
        <button onClick={styleNormal}>Normalny</button>

            <p style={{
                fontSize: textStyle.fontSize,
                fontWeight: textStyle.fontWeight,
                fontStyle: textStyle.fontStyle
            }}>"Witaj w React!"</p>
        </>
    );
}

export default Message;
