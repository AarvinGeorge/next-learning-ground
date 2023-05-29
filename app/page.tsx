import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <main >
      <h2>
        Home
      </h2>
      <br />
      <p>
        <Link href={'/users'}>All Users</Link>
      </p>
    </main>
  )
}
