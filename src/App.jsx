
import { useState } from 'react'
import './App.css'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'
import Blogs from './Components/blogs/Blogs'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const handleToBookmarks = (blog) => {
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark);
  }

  return (

    <>
    <Header></Header>
    <div className='md:flex container mx-auto'>

      <Blogs handleToBookmarks = {handleToBookmarks}></Blogs>
      
      <Bookmarks bookmarks = {bookmarks}></Bookmarks>
    </div>
    </>
  )
}

export default App
