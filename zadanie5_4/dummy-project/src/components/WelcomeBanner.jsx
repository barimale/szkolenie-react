const WelcomeBanner = (props) => {
    return (
        <>
            <p>Witaj, {props.username}! {props.isPremium ? 'Dziękujemy za bycie naszym Premium użytkownikiem!' : 'Rozważ przejście na konto Premium, aby korzystać z dodatkowych korzyści.' }</p>
        </>
    );
}

export default WelcomeBanner;