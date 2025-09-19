import { useEffect, useState } from "react";

function App() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(res => res.json())
      .then(data => setPost(data));
  }, []);

  return (
    <div>
      <h1>My React PWA</h1>
      {post ? <p>{post.title}</p> : <p>Loading...</p>}
    </div>
  );
}

export default App;
