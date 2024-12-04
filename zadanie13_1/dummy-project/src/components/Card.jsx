import styles from './Card.module.scss';

const Card = (props) => {
    return (
        <div className={styles.card}>
            <h1 className={[styles.header, styles.highlighted]}>{props.name} {props.surname}</h1>
            <h2 className={styles.content}>{props.description}</h2>
        </div>
    );
}

export default Card;