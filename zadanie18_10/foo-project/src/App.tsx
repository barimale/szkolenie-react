import { Route, Routes } from 'react-router'
import './App.css'
import PostList, { Post } from './components/PostList'
import PostDetails from './components/PostDetails'
import { useState } from 'react'
import PostForm from './components/PostForm'

function App() {
  const [posts, setPosts] = useState<Post[]>([])

  return (
    <>
      <header>
      </header>
      <Routes>
        <Route index element={<PostList totalPages={10} data={posts} onPostsChange={(items: Post[])=> setPosts(items)}/>} />
        <Route path='posts/' element={<PostList totalPages={10}  data={posts} onPostsChange={(items: Post[])=> setPosts(items)}/>} />
        <Route path='posts/:id' element={<PostDetails />} />
        <Route path='posts/add' element={<PostForm />} />
      </Routes>
      <footer>
      </footer>
    </>
  )
}

export default App
