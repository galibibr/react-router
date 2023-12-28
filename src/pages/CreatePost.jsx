import React from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const { signout } = useAuth();
  const navigate = useNavigate()

  return (
    <div>
      <h1>CreatePost</h1>
      <button className="bg-gray-100 rounded-lg px-3 border font-bold" onClick={() => {
        signout(() => navigate('/', {replace: true}))
      }}>Log Out</button>
    </div>
  );
};

export default CreatePost;
