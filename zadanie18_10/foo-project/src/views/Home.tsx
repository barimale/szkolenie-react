import PostList, { PostListProps } from "../components/PostList";

const Home = (props: PostListProps) =>{
    return(
    <>
        <PostList {...props} />
    </>)
}

export default Home;