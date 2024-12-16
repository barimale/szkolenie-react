import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import Pagination from "./Pagination"
import styled from "styled-components"

const FlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap; 
    justify-content: space-evenly;
`

const FlexItem = styled.div`
    cursor: pointer;
    border: 1px solid black;
    border-radius: 20px;
    margin: 20px;
    width: 1000px;
`

export type Post = {
    id: React.Key,
    title: string,
    body: string,
    userId: string
}

export type PostListProps = {
    onPostsChange: (data: Post[]) => void;
    data: Post[],
    totalPages: number,
    itemsPerPage: number
}

const PostList = (props: PostListProps) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string>('')
    const [currentPage, setCurrentPage] = useState(1);

    const navigate = useNavigate();

    const goToCallback = (e: React.MouseEvent, itemId: string) => {
        e.preventDefault();
        navigate(`/posts/${itemId}`);
    }

    const goToAddPost = () => {
        navigate(`/posts/add`);
    }

    useEffect(() => {
        const value = localStorage.getItem('currentPage');
        if (value) {
            const parsed = JSON.parse(value);
            setCurrentPage(parsed);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('currentPage', JSON.stringify(currentPage));
    }, [currentPage])

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _page: currentPage,
                _limit: props.itemsPerPage,
            }
        }
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
            <button onClick={() => goToAddPost()}>Dodaj post</button>
            <FlexContainer>
                {props.data.map((post: Post) => (
                    <FlexItem
                        key={post.id.toString()}
                        onClick={(e) => goToCallback(e, post.id.toString())}>                        <h2>{post.title}</h2>
                        <p style={{ margin: '30px' }}>{post.body}</p>
                    </FlexItem>
                ))}
                <Pagination
                    currentPage={currentPage}
                    totalPages={props.totalPages}
                    onPageChange={setCurrentPage}
                />
            </FlexContainer>
        </div>
    )
}

export default PostList;