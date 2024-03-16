import PropTypes from "prop-types";

const Bookmark = ({bookmark,handleDelete}) => {
console.log(bookmark)

const {title,id}=bookmark

    return (
        <div className=" bg-gray-200 rounded-xl p-3 m-4 flex gap-10 justify-between">
            <h2 className="text-2xl">{title}</h2>
            <button className="text-xl shadow-xl p-2" onClick={()=>handleDelete(id)}>Remove</button>
        </div>
    );
};

Bookmark.propTypes={
    bookmark:PropTypes.object
}

export default Bookmark;