import { useEffect, useState } from "react";

function PostApiExample() {
  const [post, setPost] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    setLoading(true);  // Start loading before fetching
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts");
      let data = await response.json();  // Get the data from the response
      setPost(data);  // Set the fetched posts to the state
      console.log(data);  // Log the data
    } catch (error) {
      setError(error.message);  // Set error message if any
    } finally {
      setLoading(false);  // Stop loading after the request is complete
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
