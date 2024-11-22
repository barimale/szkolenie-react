import Link from './Link';

const Navigation = () =>{
    return (
        <nav>
            <ul>
                {[...Array(4)].map((_, index)=>{
                    return <li key={index}>
                        <Link />
                    </li>
                })}
            </ul>
        </nav>
    );
}

export default Navigation;