import React from 'react'
import "./posts.css"
import { CiHeart } from "react-icons/ci";
import { LiaComments } from "react-icons/lia";
const Posts = ({post}) => {
  return (
   <div className="card">
      <img src={post.image} alt={post.title} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{post.title}</h2>
        <p className="card-description">{post.content.slice(3,)}</p>
        <div className="card-buttons">
          <button className="more-button">Daha Fazlası</button>
          <button className="like-button">
            <CiHeart className='icons' /><span>{post.likes.length}</span>
          </button>
          <button className="comment-button">
            <LiaComments className='icons' /><span>{post.comments.length}</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Posts