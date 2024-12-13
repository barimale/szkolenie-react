import { ChangeEvent, FormEvent, useState } from "react";
import { Post } from "./PostList";
import axios from "axios";
import { useNavigate, useParams } from "react-router";

type PostFormEditProps = {
    post: Post | undefined
}
const PostFormEdit = (props: PostFormEditProps) => {
    const [formData, setFormData] = useState<Post | undefined>(props.post ? { ...props.post }: undefined);
    const [result, setResult] = useState<string>();
    const params = useParams()
    const navigate = useNavigate();

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        setFormData((prevDataForm) => {
            return prevDataForm ? { ...prevDataForm, [name]: e.target.value } : undefined;
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // formData.id = Date.now().toString();
        // formData.userId = '1';
        axios.put(`https://jsonplaceholder.typicode.com/posts/${params.id}`,
            formData
        )
            .then(function (response) {
                console.log(response);
                setResult(JSON.stringify(response));
            })
            .catch(function (error) {
                console.log(error);
                setResult(JSON.stringify(error));
            });
    };

    const goToCallback = () => {
        navigate(`posts/${formData?.id}`);
    }

    return (
        <>
            <button onClick={() => goToCallback()}>Wróć</button>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    placeholder="title"
                    onChange={handleInputChange}
                    value={formData?.title}
                />
                <br />
                <label htmlFor="body">Body</label>
                <input
                    type="text"
                    id="title"
                    name="body"
                    placeholder="body"
                    onChange={handleInputChange}
                    value={formData?.body}
                />
                <br />
                <button>Save</button>
                <p>{result}</p>
            </form>
        </>
    )
}

export default PostFormEdit;