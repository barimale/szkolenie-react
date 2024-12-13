import axios from "axios"
import { useEffect, useState } from "react"

type Post = {
    id: React.Key,
    title: string,
    body: string
}

const PostList = () => {
    const [posts, setPosts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        // Fetching data from API
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                setPosts(response.data) // Setting data in state
                setLoading(false)
            })
            .catch(error => {
                setError('An error occurred while fetching data')
                setLoading(false)
            })
    }, []) // Empty array means the effect will run only once after the component mounts

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    return (
        <div style={{ border: '1px solid darkblue' }}>
            <h1>Posts List</h1>
            <ul>
                {posts.map((post: Post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default PostList;