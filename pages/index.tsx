import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

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
          <p className="font-serif italic mt-2 ml-2">
            A place where you can satisfy your hands and heart with mehndi.
          </p>
        </div>
        <div className="mr-32">
          {/* <img src="/Images/mehndi-logo.png" width={500} height={500} /> */}
          <Carousel
            width={350}
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            interval={2000}
          >
            <div>
              <img src="/Images/1.jpg" />
            </div>
            <div>
              <img src="/Images/2.jpg" />
            </div>
            <div>
              <img src="/Images/3.gif" />
            </div>
            <div>
              <img src="/Images/4.jpg" />
            </div>
          </Carousel>
        </div>
      </div>
      <div className="max-w-2xl mx-auto my-8 text-xl text-center">
        <p className="font-serif">
          We are two Sisters, can do Mehndi/Henna for just about any occasion.
          We Specialize in Bridal Mehndi, Sangeet Parties, Engagements, Baby
          Showers, Birthday Parties, Ladies Night outs, School Events, Corporate
          Events and Fundraisers. We love to extend this art form onto cakes and
          other mediums like wood, glass and candles.
        </p>
      </div>
      <div className="">
        <div className="bg-amber-800 text-white p-2 rounded-lg shadow-md my-8 cursor-pointer mx-auto max-w-md text-center text-2xl">
          Book Your Time Now
        </div>
      </div>
      <div className="grid grid-cols-3 max-w-7xl mx-auto my-16 gap-14 border shadow-lg p-8">
        <div></div>
      </div>
    </div>
  )
}

export default Home
