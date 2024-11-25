import React from 'react'
import Navbar from './Navbar'
import Postcreation from './Postcreation'
import PostCard from './postcard'
import { useSelector } from 'react-redux'
const Homeblog = () => {
  const user = useSelector((state) => state?.feeds?.user);
  return (
    <div>
        <Navbar/>
        <Postcreation/>
        <PostCard/>
    </div>
  )
}

export default Homeblog