import PropTypes from "prop-types";
import Bookmark from './Bookmark'


const Bookmarks = ({bookmarks}) => {


    return (
        <div className="bg-slate-50 p-3">
            <h3>Bookmarks {bookmarks.length}</h3>
           {
            bookmarks.map(bookmark => <Bookmark key={bookmarks.id} bookmark={bookmark} ></Bookmark>)
           }
           
        </div>
    );
};

Bookmarks.propTypes={
    bookmarks:PropTypes.array
}

export default Bookmarks;