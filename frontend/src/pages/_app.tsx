import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Nunito } from 'next/font/google'
import { formatDate } from '@/utiles/formatDates'

const nunito = Nunito({ subsets: ['latin'], display: 'swap' })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={nunito.className}>
        <Component {...pageProps} />
      </main>
    </>
  )
}
