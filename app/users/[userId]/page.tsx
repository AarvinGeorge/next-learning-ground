import UserPosts from '@/component/UserPosts'
import getAllUsers from '@/lib/getAllUsers'
import getUserData from '@/lib/getUserData'
import getUsersPosts from '@/lib/getUsersPosts'
import { Metadata } from 'next'
import Link from 'next/link'
import React, { Suspense } from 'react'

type Params = {
    params : {
        userId : string
    }
}

export async function generateMetadata({params:{userId}}:Params): Promise<Metadata>{
    const userData : Promise<User> = getUserData(userId)
    const user: User = await userData
    return {
        title : user.name,
        description : `This is the page of ${user.name}`
    }

}

export default async function UserPage({params: {userId}}: Params) {
    const userData : Promise<User> = getUserData(userId)
    const userPostsData : Promise<Post[]> = getUsersPosts(userId)

    const user = await userData

    const content = (
    <>
        <h2>
            <Link href={'/users'}>
                Go Back To User List
            </Link>
        </h2>
        <br />
        <h2>
            {user.name}
        </h2>
        <br />
        <Suspense fallback={<h1>Loaading....</h1>}>
        {/* @ts-expect-error Async Server Component */}
            <UserPosts promise = {userPostsData} />
            </Suspense>
        
    </>
    )

  return content
}

//could this be a special name function ?
export async function generateStaticParams(){
    const usersData: Promise<User[]> = getAllUsers()
    const users: User[] = await usersData

    return users.map(user => ({
        userId: user.id.toString()
    }))
}