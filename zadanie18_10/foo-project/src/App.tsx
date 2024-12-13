import { Route, Routes } from 'react-router'
import './App.css'
import { Post } from './components/PostList'
import { useEffect, useState } from 'react'
import axios from 'axios'
import AddEditPost from './views/AddEditPost'
import PostPage from './views/PostPage'
import Home from './views/Home'

function App() {
  const [posts, setPosts] = useState<Post[]>([])
  const [editPost, setEditPost] = useState<Post>()
  const [totalPages, setTotalPages] = useState<number>(0);
  const itemsPerPage = 10;

  useEffect(() => {
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
        <Route index element={<Home
          itemsPerPage={itemsPerPage}
          totalPages={totalPages}
          data={posts}
          onPostsChange={(items: Post[]) => {
            setPosts(items);
            setEditPost(undefined);
          }} />} />
        <Route path='posts/:id' element={<PostPage onEditCallback={(item: any) => setEditPost(item)} />} />
        <Route path='posts/add' element={<AddEditPost post={editPost} />} />
        <Route path='posts/edit/:id' element={<AddEditPost post={editPost} />} />
      </Routes>
      <footer>
      </footer>
    </>
  )
}

export default App
