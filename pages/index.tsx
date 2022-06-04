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
        <div className="mr-40 my-4 rounded-sm shadow-md">
          {/* <img src="/Images/mehndi-logo.png" width={500} height={500} /> */}
          <Carousel
            width={400}
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            interval={2000}
          >
            <div>
              <img src="https://www.beyoung.in/blog/wp-content/uploads/2020/01/peacock-compressed-931x1024.jpg" />
            </div>
            <div>
              <img src="https://cdn0.weddingwire.in/articles/images/1/9/7/5/img_65791/muslim-mehndi-images-amrita-henna-leaf-shaped-mehndi-design.jpg" />
            </div>
            <div>
              <img src="https://hdfreewallpaper.net/wp-content/uploads/2016/11/indian-mehndi-design-images-downloads-e1643600931131.jpg" />
            </div>
            <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRTGQO96phRV-rEw3gWABwZ2TwxZJ3FoY1URpuOa6opHyGUNxpWT3tJZ8TKEy9TTjam08&usqp=CAU" />
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
      <div className="grid grid-cols-4 max-w-7xl mx-auto my-16 gap-14 border shadow-lg p-8 text-center items-center">
        <div>
          <img className="h-80" src="/Images/1.jpg" />
        </div>
        <div>
          <img className="h-80" src="/Images/4.jpg" />
        </div>{' '}
        <div>
          <img className="h-80" src="/Images/1.jpg" />
        </div>
        <div>
          <img className="h-80" src="/Images/4.jpg" />
        </div>
      </div>
    </div>
  )
}

export default Home
