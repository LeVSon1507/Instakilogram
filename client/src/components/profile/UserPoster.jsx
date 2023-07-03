import React from 'react'

export const UserPoster = () => {
  // Mock data for posts
  const posts = [
    { id: 1,  imageUrl: "https://kynguyenlamdep.com/wp-content/uploads/2022/06/avatar-cute-meo-con-than-chet-700x695.jpg" },
    { id: 2, imageUrl: "https://kynguyenlamdep.com/wp-content/uploads/2022/06/avatar-cute-meo-con-than-chet-700x695.jpg" },
    { id: 3, imageUrl: "https://kynguyenlamdep.com/wp-content/uploads/2022/06/avatar-cute-meo-con-than-chet-700x695.jpg" },
    { id: 4, imageUrl: "https://kynguyenlamdep.com/wp-content/uploads/2022/06/avatar-cute-meo-con-than-chet-700x695.jpg" },
    { id: 4, imageUrl: "https://kynguyenlamdep.com/wp-content/uploads/2022/06/avatar-cute-meo-con-than-chet-700x695.jpg" },
    // Add more posts...
  ];
  return (
      <div className="post-list">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <img src={post.imageUrl} alt={post.id} />
          </div>
        ))}
      </div>
  )
}

