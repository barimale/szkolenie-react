import { Route, Routes } from 'react-router'
import './App.css'
import PostList, { Post } from './components/PostList'
import PostDetails from './components/PostDetails'
import { useState } from 'react'

function App() {
  const [posts, setPosts] = useState<Post[]>([])

  return (
    <>
      <header>
      </header>
      <Routes>
        <Route index element={<PostList data={posts} onPostsChange={(items: Post[])=> setPosts(items)}/>} />
        <Route path='posts/' element={<PostList data={posts} onPostsChange={(items: Post[])=> setPosts(items)}/>} />
        <Route path='posts/:id' element={<PostDetails posts={posts}/>} />
      </Routes>
      <footer>
      </footer>
    </>
  )
}

export default App
