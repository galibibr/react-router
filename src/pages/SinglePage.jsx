import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const SinglePage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const navigate = useNavigate()
  const goBack = () => navigate(-1)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  return (
    post && (
      <div>
        <button onClick={goBack} className="border rounded-lg bg-gray-100 px-3 font-bold">Go back</button>
        <h1 className="text-center font-bold">{post.title}</h1>
        <p>{post.body}</p>
        <Link
          to={`/blog/${id}/edit`}
          className="border rounded-lg bg-gray-100 font-bold px-2">
          Edit this post
        </Link>
      </div>
    )
  );
};

export default SinglePage;
