import { ChangeEvent, FormEvent, useState } from "react";
import { Post } from "./PostList";
import axios from "axios";
import { useNavigate } from "react-router";

const PostForm = () => {
    const [formData, setFormData] = useState<Post>({
        title: '',
        id: '',
        body: '',
        userId: ''
    });
    const [result, setResult] = useState<string>();
    const navigate = useNavigate();

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.name;
        setFormData((prevDataForm) => {
            return { ...prevDataForm, [name]: e.target.value };
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setResult('');

        formData.id = Date.now().toString();
        formData.userId = '1';
        axios.post('https://jsonplaceholder.typicode.com/posts',
            formData
        )
            .then(function (response) {
                setResult(JSON.stringify(response));
            })
            .catch(function (error) {
                setResult(JSON.stringify(error));
            });
    };

    const goToCallback = () => {
        navigate(`/`);
    }

    return (
        <>
            <button onClick={() => goToCallback()}>Wróć</button>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title" style={{ margin: '10px' }}>Title</label>
                <input
                    style={{ margin: '10px' }}
                    type="text"
                    id="title"
                    name="title"
                    placeholder="title"
                    onChange={handleInputChange}
                    value={formData.title}
                />
                <br />
                <label htmlFor="body" style={{ margin: '10px' }}>Body</label>
                <input
                    style={{ margin: '10px' }}
                    type="text"
                    id="title"
                    name="body"
                    placeholder="body"
                    onChange={handleInputChange}
                    value={formData.body}
                />
                <br />
                <button>Zapisz</button>
                <p>{result}</p>
            </form>
        </>
    )
}

export default PostForm;