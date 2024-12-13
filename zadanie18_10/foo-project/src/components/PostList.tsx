import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import Pagination from "./Pagination"

export type Post = {
    id: React.Key,
    title: string,
    body: string,
}

type PostListProps = {
    onPostsChange: (data: Post[]) => void;
    data: Post[],
    totalPages: number
}

const PostList = (props: PostListProps) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(props.totalPages);

    const navigate = useNavigate();

    const goToCallback = (e: React.MouseEvent, itemId: string) => {
        e.preventDefault();
        navigate(`/posts/${itemId}`);
    }

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts',{
            params: {
              _page: currentPage,
              _limit: 10,
            }}
        )
            .then(response => {
                props.onPostsChange(response.data)
                setLoading(false)
            })
            .catch(error => {
                setError(`An error occurred while fetching data: ${error}`)
                setLoading(false)
            })
    }, [currentPage])

    if (loading) return <p>Loading...</p>
    if (error) return <p>{error}</p>

    return (
        <div>
            <h1>Posts List</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {props.data.map((post: Post) => (
                    <div
                        key={post.id.toString()}
                        onClick={(e) => goToCallback(e, post.id.toString())}
                        style={{ cursor: 'pointer', border: '1px solid black', borderRadius: '20px', margin: '20px' }}>
                        <h3>{post.title}</h3>
                        <h3>{post.id.toString()}</h3>
                        <p>{post.body}</p>
                    </div>
                ))}
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                />
            </div>
        </div>
    )
}

export default PostList;