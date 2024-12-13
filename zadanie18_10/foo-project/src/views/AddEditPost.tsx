import PostForm from "../components/PostForm";
import PostFormEdit, { PostFormEditProps } from "../components/PostFormEdit";

const AddEditPost = (props: PostFormEditProps) =>{
    return(
    <>
        {props.post ? (
            <PostFormEdit post={props.post} />
        ):(
            <PostForm />
        )}
    </>
    )
}

export default AddEditPost;