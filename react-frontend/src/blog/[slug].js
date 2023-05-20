import React from 'react'

const Post = () => {
    const router=useRouter();
    const {slug}=router.query
  return (
    <div>
      <p>Post:{slug}</p>
    </div>
  )
}

export default Post
