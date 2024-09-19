'use client'
import { signOut, useSession } from 'next-auth/react'
import { LoginButton } from '../_components/LoginButton'

export default function Login() {
  const { data: session, status } = useSession()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to DC PORTAL</h1>
      <div>
        {status === 'authenticated' ? (
          <div>
            <p>セッションの期限：{session.expires}</p>
            <p>ようこそ、{session.user?.name}さん</p>
            <img
              src={session.user?.image ?? ``}
              alt=""
              style={{ borderRadius: '50px' }}
            />
            <LoginButton />
          </div>
        ) : (
          <LoginButton />
        )}
      </div>
    </main>
  )
}
