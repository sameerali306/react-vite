import { useEffect, useState } from "react";

function PostApiExample() {
  const [post, setPost] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);  
    try {
      
      let response = await fetch("https://jsonplaceholder.typicode.com/post");
      if (!response.ok) {
        throw new Error("failed to fetch!!");
      }
      let data = await response.json();  
      setPost(data);  
      console.log(data); 
    } catch (error) {
      setError(error.message); 
    } finally {
      setLoading(false);  
    }
  };

  return (
    <>
      <h2>Post API</h2>
      <button onClick={fetchPosts}>Fetch Posts</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {loading && <p>Loading...</p>}
      {post.map((item, index) => (
        <div key={index}>
          <h3>{item.id}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </>
  );
}

export default PostApiExample;
