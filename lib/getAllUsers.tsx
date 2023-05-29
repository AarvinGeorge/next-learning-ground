import { features } from 'process'
import React from 'react'

export default async function getAllUsers() {

    const res = await fetch('https://jsonplaceholder.typicode.com/users')

    if(!res.ok) throw new Error ('Unable to fetch users')

    return res.json()
}
