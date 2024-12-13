import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"

export type Post = {
    id: React.Key,
    title: string,
    body: string,
}

type PostListProps = {
    onPostsChange: (data: Post[])=> void;
    data: Post[]
}

const PostList = (props: PostListProps) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const navigate = useNavigate();

    const goToCallback = (e: React.MouseEvent, itemId: string) => {
        e.preventDefault();
        navigate(`/posts/${itemId}`);
    }

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                props.onPostsChange(response.data)
                setLoading(false)
            })
            .catch(error => {
                setError(`An error occurred while fetching data: ${error}`)
                setLoading(false)
            })
    }, [])

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    return (
        <div>
            <h1>Posts List</h1>
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {props.data.map((post: Post) => (
                    <div 
                        key={post.id.toString()} 
                        onClick={(e) => goToCallback(e, post.id.toString())}
                        style={{cursor: 'pointer', border: '1px solid black', borderRadius: '20px', margin: '20px'}}>
                        <h3>{post.title}</h3>
                        <h3>{post.id.toString()}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PostList;