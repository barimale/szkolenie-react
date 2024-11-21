import Link from './Link';

const Navigation = () =>{
    return (
        <nav>
            {[...Array(4)].map((_, index)=>{
                return <li key={index}>
                    <Link />
                </li>
            })}
        </nav>
    );
}

export default Navigation;