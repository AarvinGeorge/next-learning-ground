import React from 'react'

export default async function getUserData(userId: string) {

    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)

    if(!res.ok) throw new Error('Unable to fetch user data')

    return res.json()
}
