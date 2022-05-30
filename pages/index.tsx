import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="">
      <Head>
        <title>Home | Sisters Mehndi</title>
      </Head>
      <div className="flex items-center shadow-lg mt-8">
        <div className="flex-1 p-16">
          <h1 className="text-8xl">Welcome to</h1>
          <h1 className=" text-amber-500 text-8xl font-bold ">
            Sisters Mehndi
          </h1>
          <p className="">
            A place where you can satisfy your hands and heart with mehndi.
          </p>
        </div>
        <div className="relative h-300 w-300">
          <Image src="/Images/mehndi-logo.png" layout="fill" />
          <p>dhgd</p>
        </div>
      </div>

      
    </div>
  )
}

export default Home
