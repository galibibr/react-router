import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SinglePage = () => {
  const { id } = useParams();

  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  return post && <div>
    <h1 className="text-[20px] text-center font-bold">{ post.title }</h1>
    <p>{ post.body }</p>
    <Link to={`/blog/${id}/edit`}>Edit this post</Link>
  </div>;
};

export default SinglePage;
