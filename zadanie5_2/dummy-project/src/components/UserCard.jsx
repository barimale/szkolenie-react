const UserCard = (props) => {
    return (
        <>
            <p>Imię: {props.name}</p>
            <p>E-mail: {props.email}</p>
            <p style={{backgroundColor: props.isOnline ? 'green' : 'red'}}>Status: {props.isOnline ? 'Online' : 'Offline'}</p>
        </>
    );
}

export default UserCard;