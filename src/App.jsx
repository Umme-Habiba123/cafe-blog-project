
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'



function App() {

  const [bookMarked, setBookMarked ]=useState([])
  const [readingCount, setReadingCount]=useState(0)

const handleMarkAsRead=(time,id)=>{
 setReadingCount(readingCount + time)
 handleRemoveFrombookMark(id)
}

const handleRemoveFrombookMark=(id)=>{
   const remainingBookMark=bookMarked.filter((mark)=>mark.id !== id)
   setBookMarked(remainingBookMark)
}


  const handleBookMark=(blog)=>{
    setBookMarked([...bookMarked, blog])
  }


  return (
   
    <>
    <Navbar></Navbar>


  <div className='main-container flex text-center m-10'>
    <div className="left-container w-[70%]">  
    <Blogs handleMarkAsRead={handleMarkAsRead} handleBookMark={handleBookMark}></Blogs>
       </div>

    <div className="right-container w-[30%]">
      <h1>Reading time: {readingCount}</h1>
      <h1>Bookmark Count: {bookMarked.length}</h1>
      {
        bookMarked.map((marked)=><h3 className='bg-pink-100 rounded-xl p-3 text-black mb-2'>{marked.title}</h3>)
      }

      
    </div>
    
  </div>




    </>
  )
}

export default App
