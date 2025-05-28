import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NavBar from '../components/NavBar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavBar />
      {/* pt-20 = 80px para compensar a altura do menu */}
      <main className="pt-20 bg-[#F9FAFB] text-[#111827] min-h-screen">
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default MyApp
