import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ArticleGrid from '../components/ArticleGrid'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <ArticleGrid />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}
