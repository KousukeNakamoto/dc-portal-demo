'use client'

import { useSession } from 'next-auth/react'
import Link from 'next/link'

const routes = [
  {
    id: 1,
    url: 'skillsheet',
    name: 'SkillSheet',
  },
]

export default function LoginPage() {
  const { data: session, status } = useSession()

  if (status === 'loading') return 'loading'
  return (
    <div className="container mx-auto">
      <h1>home</h1>
      {session?.user.role === 'ADMIN' && (
        <div>
          <Link href={'/admin'}>admin</Link>
        </div>
      )}
      <ul>
        {routes.map((route) => (
          <Link key={route.id} href={route.url}>
            {route.name}
          </Link>
        ))}
      </ul>
    </div>
  )
}
