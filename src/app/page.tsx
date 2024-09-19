'use client'

import { signIn, useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const { data: session, status } = useSession()
  const router = useRouter()

  // useEffect(() => {
  //   if (status === 'authenticated') {
  //     router.push('/home')
  //   }
  // }, [status, router])

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="p-6 bg-white rounded shadow-md">
        <h1 className="mb-4 text-2xl font-bold">Login</h1>
        <button
          onClick={() => signIn('google', { callbackUrl: '/home' })}
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  )
}
