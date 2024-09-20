'use client'
import { signIn, signOut, useSession } from 'next-auth/react'

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
            <button onClick={() => signOut()}>Sign out</button>
          </div>
        ) : (
          <button onClick={() => signIn('google')}>Sign in with Google</button>
        )}
      </div>
    </main>
  )
}
