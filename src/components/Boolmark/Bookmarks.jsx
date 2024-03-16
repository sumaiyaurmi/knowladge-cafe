import PropTypes from "prop-types";
import Bookmark from './Bookmark'


const Bookmarks = ({ bookmarks,readingtime,handleDelete}) => {


    return (
        <div className="bg-slate-50 p-3">
            <h2>Reading Time : {readingtime}</h2>
            <h3>Bookmarks {bookmarks.length}</h3>
           {
            bookmarks.map((bookmark,index) => <Bookmark key={index} bookmark={bookmark} handleDelete={handleDelete} ></Bookmark>)
           }
           
        </div>
    );
};

Bookmarks.propTypes={
    bookmarks:PropTypes.array
    // readingtime:PropTypes.number
}

export default Bookmarks;