import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";
import Bookmarks from "./components/Boolmark/Bookmarks";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const[readingtime,setReadingtime]=useState(0)

  const handleBookmark = (blog) => {
    const isExit = bookmarks.find((item) => item.id == blog.id);
    if (!isExit) {
      setBookmarks([...bookmarks, blog]);
    } else {
      alert("already exit");
    }
  };

  const displayReadingTime=(time)=>{
// console.log("marking as read", {time})
const newTime= readingtime + time;
setReadingtime(newTime)
  }

const handleDelete=(id)=>{
const remaining=bookmarks.filter(item =>item.id !== id )
setBookmarks(remaining)
}

  return (
    <>
      <Header></Header>
      <div className="flex justify-around max-w-7xl mx-auto">
        <Blogs handleBookmark={handleBookmark} displayReadingTime={displayReadingTime}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingtime={readingtime} handleDelete={handleDelete}></Bookmarks>
      </div>
    </>
  );
}

export default App;
