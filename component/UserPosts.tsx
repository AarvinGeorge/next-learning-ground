import React from 'react'

type Props = {
    promise : Promise<Post[]>
}

export default async  function UserPosts({promise} : Props) {

    const [userPosts] = await Promise.all([promise])

    const content = userPosts.map(post => {
            return ( 
                <article key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                </article>
            )
        })
    
    return content
    
  
    }