import '../styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>hinna-henna</title>
        <meta
          name="description"
          content="book your mehndi time for any ocassion related to Bridal Mehndi, Sangeet Parties,
          Engagements, Baby Showers, Birthday Parties, Ladies Night outs, School
          Events, Corporate Events and Fundraisers"
        />
        <meta property="og:title" content="hinna-henna" />
        <meta
          property="og:description"
          content=" This is platform for mehndi (henna), can do Mehndi/Henna for just about any
          occasion. We Specialize in Bridal Mehndi, Sangeet Parties,
          Engagements, Baby Showers, Birthday Parties, Ladies Night outs, School
          Events, Corporate Events and Fundraisers. We love to extend this art
          form onto cakes and other mediums like wood, glass and candles."
        />
        <meta
          property="og:url"
          content="http://hinna-henna.vercel.app.com/"
        />
        <meta property="og:type" content="website" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp
