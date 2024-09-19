import type { Metadata } from 'next'
import './globals.css'
import { Noto_Sans_JP } from 'next/font/google'
import NextAuthProvider from './_provider/NextAuth'

const noto_sans_jp = Noto_Sans_JP({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'xxxxxxx',
  description: 'xxxxxxx',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={noto_sans_jp.className}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  )
}
