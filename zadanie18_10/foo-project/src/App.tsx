import { Route, Routes } from 'react-router'
import './App.css'
import PostList, { Post } from './components/PostList'
import PostDetails from './components/PostDetails'
import { useEffect, useState } from 'react'
import PostForm from './components/PostForm'
import PostFormEdit from './components/PostFormEdit'
import axios from 'axios'

function App() {
  const [posts, setPosts] = useState<Post[]>([])
  const [editPost, setEditPost] = useState<Post>()
  const [totalPages, setTotalPages] = useState<number>(0);
  const itemsPerPage = 10;
  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts'
  )
      .then(response => {
        setTotalPages(response.data.length / itemsPerPage);
      })
      .catch(error => {
        console.log(error);
      })
  }, []);

  return (
    <>
      <header>
      </header>
      <Routes>
        <Route index element={<PostList totalPages={totalPages} data={posts} onPostsChange={(items: Post[]) => setPosts(items)} />} />
        <Route path='posts/:id' element={<PostDetails onEditCallback={(item: any)=> setEditPost(item)}/>} />
        <Route path='posts/add' element={<PostForm />} />
        <Route path='posts/edit/:id' element={<PostFormEdit post={editPost} />} />

      </Routes>
      <footer>
      </footer>
    </>
  )
}

export default App
