
import { useState } from 'react'
import './App.css'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'
import Blogs from './Components/blogs/Blogs'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const [readingtime, setReadingTime] = useState(0)
  const handleToBookmarks = (blog) => {
    const newBookmark = [...bookmarks, blog];
    setBookmarks(newBookmark);
  }
  const handleMarkAsRead = (time) => {
    const newReadingTime = readingtime + time;
    setReadingTime(newReadingTime);
  }

  return (

    <>
    <Header></Header>
    <div className='md:flex container mx-auto'>

      <Blogs handleMarkAsRead = {handleMarkAsRead} handleToBookmarks = {handleToBookmarks}></Blogs>
      
      <Bookmarks bookmarks = {bookmarks} readingtime = {readingtime}></Bookmarks>
    </div>
    </>
  )
}

export default App
