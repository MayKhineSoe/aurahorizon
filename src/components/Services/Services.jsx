import React from 'react'
import hero from '../../assets/classhero.png'
import { IoIosArrowRoundForward } from 'react-icons/io';
import print from '../../assets/printphoto.png'
import './services.css'
import { ServiceData } from './servicedata';
import {PriceData} from './pricedata';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FaFileAlt, FaImage, FaFileImage } from "react-icons/fa";
import {motion} from 'framer-motion'
import {FadeRight} from '../../utility/Animation'
import { FadeLeft } from '../../utility/Animation';



const Services = () => {

  const setting = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pasueOnFocus: true,
    centerPadding: "20px",
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: "20px",
          // infinite: true,
        },
      },
    ]

  }
  return (
    <section>
      {/* Banner Section */}
      <div className='bg-light overflow-hidden relative'>
        {/* Hero Section */}
        <div className='container grid-cols-1 grid md:grid-cols-2 min-h-[500px]'>
          {/* Brand Info */}
          <div className='flex flex-col justify-center py-10
                  md:py-0 relative z-20'>
            <div className='text-center md:text-left space-y-10 lg:max-w-[400px]'>
              <motion.h1
              variants={FadeRight(0.6)}
                                            initial="hidden"
                                            animate="visible" 
              className='text-3xl lg:text-5xl font-bold font-averia !leading-snug'>Printing {""}
                <span className='text-secondary'>Services</span>
              </motion.h1>
              <motion.p
              variants={FadeRight(0.9)}
                                            initial="hidden"
                                            animate="visible" 
              className='text-gray-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Aliquam sit hic dolorem ullam eveniet placeat vel. Error eligendi,
                expedita officia delectus eius excepturi consectetur aspernatur exercitationem amet,
                a consequuntur illum?</motion.p>
              <motion.div
              variants={FadeRight(1.1)}
                                            initial="hidden"
                                            animate="visible"  
              className='flex justify-center md:justify-start mt-5'>
                <button className='primary-btn flex items-center gap-2 group'>Get Started
                  <IoIosArrowRoundForward className='text-xl 
                        group-hover:translate-x-2
                        group-hover:-rotate-45 duration-300
                        ' />
                </button>
              </motion.div>
            </div>
          </div>
          {/* Brand Image */}
          <motion.div
          initial={{opacity: 0, x: 200, rotate: 75}}
          animate={{opacity: 1, x: 0, rotate: 0}}
          transition={{duration: 1, delay: 0.2}}
          className='flex flex-col justify-center'>
            <img src={print} className='w-[400px] xl:w-[500px]
                    relative z-10 drop-shadow' alt="" />

            {/* <img src={herobg} className='absolute -bottom-32 w-[800px]
                    md:w-[1500px] z-[1] hidden md:block' alt="" /> */}
          </motion.div>

        </div>
      </div>

      {/* Our Printing Solutions */}
      <div className="container mt-16">
        <div>
          <h1 className='uppercase mb-5 font-bold font-averia text-4xl'>Our Printing Solutions</h1>

        </div>

        <div className='pb-20 '>
          <Slider {...setting} >
            {
              ServiceData.map((item) => {
                return (
                  <div className='card gap-4 overflow-hidden max-w-[95%]  pb-20' key={item.id}>
                    <div className='desc text-center'><p>{item.title}</p></div>
                    <div className='filter'></div>
                    <div className='top'></div>
                    <div className='right'></div>
                    <div className='bottom'></div>
                    <div className='left'></div>
                    <img src={item.imgURL} />
                    {/* <img src='https://images.unsplash.com/photo-1494602865239-855ccddebf5c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da28ba003162a28f79d92bede7e14bfd&auto=format&fit=crop&w=1050&q=80' /> */}
                  </div>
                )
              })
            }
          </Slider>
        </div>

       
      </div>

      {/* Pricing Section */}
      <div className="min-h-screen bg-background p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-heading text-4xl font-averia font-heading text-center text-foreground mb-12">
          Printing Service Prices
        </h1>
        <div className='pb-20 container'>
            <Slider {...setting} >
            {PriceData.map((item) => (
            <div
              key={item.id}
              className="bg-card rounded-lg max-w-[85%] flex items-center shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={item.image}
                  alt={`${item.name} paper`}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?auto=format&fit=crop&w=300&q=80";
                  }}
                />
                <div className="absolute inset-0 bg-primary bg-opacity-20"></div>
                <h2 className="absolute bottom-4 left-4 text-xl font-bold text-white">
                  {item.name}
                </h2>
              </div>
              
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <FaFileAlt className="text-chart-1 text-xl" />
                    <span className="text-accent-foreground">Letter</span>
                  </div>
                  <span className="font-semibold text-foreground">{item.letterPrice}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <FaFileImage className="text-chart-2 text-xl" />
                    <span className="text-accent-foreground">Image & Letter</span>
                  </div>
                  <span className="font-semibold text-foreground">{item.imageLetterPrice}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <FaImage  className="text-chart-3 text-xl" />
                    <span className="text-accent-foreground">Image Only</span>
                  </div>
                  <span className="font-semibold text-foreground">{item.imageOnlyPrice}</span>
                </div>
              </div>

              <div className="p-4 bg-muted border-t border-border">
                <button className="w-full py-2 px-4 bg-primary text-primary-foreground rounded hover:bg-opacity-90 transition-colors duration-300">
                  Select Plan
                </button>
              </div>
            </div>
          ))}
            </Slider>
        </div>
      </div>
    </div>


    </section>
  )
}

export default Services