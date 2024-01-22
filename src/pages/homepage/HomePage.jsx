import React, { useEffect, useState } from 'react'
import axios from "axios"
import Posts from '../posts/Posts'
import "./home.css"
const HomePage = () => {
  const [posts,setPosts] = useState([])
  useEffect(() => {
    const getBlog = async() => {
      const res = await axios.get("/blogs/?page=1&limit=10")
      console.log(res.data.data)
      setPosts(res.data.data)
    }
    getBlog()  
  },[])
  
  return (
    <div className="postCards">{posts.map((post) => (
      <Posts  post={post}/>
    ))}</div>
  )
}

export default HomePage