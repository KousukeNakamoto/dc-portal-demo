import { LoginButton } from './_components/LoginButton'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Welcome to My Auth Project</h1>
      <LoginButton />
    </main>
  )
}
