import { useNavigate, useParams } from "react-router";
import { Post } from "./PostList";

export type PostDetailsProps = {
    posts: Post[];
}

const PostDetails = (props: PostDetailsProps) => {
    const navigate = useNavigate();
    const params = useParams()
    const details = props.posts.find((p: Post) => Number(p.id) === Number(params.id));

    const goToCallback = () => {
        navigate(`/`);
    }

    return (
        <>
            <h1>Nazwa: {details?.title}</h1>
            <h2>ID: {details?.id.toString()}</h2>
            <p>Tresc: {details?.body}</p>
            <button onClick={goToCallback}>Wróć</button>
        </>
    )
}

export default PostDetails;