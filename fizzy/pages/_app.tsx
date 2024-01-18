import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'
const inter = Poppins({ subsets: ['latin'] ,weight:'400'})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${inter.className} p-4 max-h-screen max-w-screen-3xl`}>
      <Component {...pageProps} />
    </main>
  )
}
