import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Header from "./components/Header/Header";
import Bookmarks from "./components/Boolmark/Bookmarks";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const handleBookmark = (blog) => {
    const isExit = bookmarks.find((item) => item.id == blog.id);
    if (!isExit) {
      setBookmarks([...bookmarks, blog]);
    } else {
      alert("already exit");
    }
  };
  return (
    <>
      <Header></Header>
      <div className="flex justify-around max-w-7xl mx-auto">
        <Blogs handleBookmark={handleBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  );
}

export default App;
