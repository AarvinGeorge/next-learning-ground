import React from 'react'

export default async function getUsersPosts(userId : string) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`,{next : {revalidate: 30}})
    
    if(!res.ok) throw new Error('Unable to fetch user Posts')

    return res.json()
}
