import React, { useEffect, useState } from 'react'

const BlogChild = () => {
    const [count, updateCount] =useState(0);
    useEffect(()=>{
       const timer = setTimeout(()=>{
            updateCount(((count) => count + 1));
        },1000);
        return ()=>clearTimeout(timer);
    },[])
  return (
    <h1>I've rendered {count} times!</h1>
  )
}

export default BlogChild