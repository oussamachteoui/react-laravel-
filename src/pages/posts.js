import React, { useEffect, useState } from 'react';
import axios from 'axios';






function Posts() {
    const [posts , setPosts]= useState([])



    useEffect (()=>{
           axios.get('http://127.0.0.1:8000/api/posts')
           .then(res =>{console.log(res)
            
            setPosts(res.data)
            
           })
           .catch(err =>{
               console.log(err);
               
           })
    },[])

    return (
        <div>
        
            <ul>
                {
                   posts.map(post =>(
                       <li key={post.id}>{post.name}</li>
                   ))
                }
            </ul>
        </div>
    )
}

export default Posts
