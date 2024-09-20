'use client'
import { signOut } from 'next-auth/react'
import { Button } from '../ui/button'

export const Logout = () => {
  return (
    <div>
      <Button onClick={() => signOut()}>Logout</Button>
    </div>
  )
}
