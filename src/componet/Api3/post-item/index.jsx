// PostItem.js
function PostItem({ post }) {
    return (
      <div>
        <h3>{post.id}</h3>
        <p>{post.body}</p>
      </div>
    );
  }
 
  
  export default PostItem;
  