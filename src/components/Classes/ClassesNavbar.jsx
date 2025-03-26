import React from 'react'
import Navbar from '../Navbar/Navbar'
import { IoIosArrowRoundForward } from 'react-icons/io';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import hero from '../../assets/classhero.png'
import herobg from '../../assets/download.svg'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from 'react-slick'
import { ClassData } from '../../mockData/classdata'
import { GrammarClassData } from '../../mockData/grammarclass';
import { IoBagHandleOutline } from 'react-icons/io5';
import Studentpng from '../../assets/student.png'
import Bannerpng from '../../assets/classbanner.jpg'
import { FiClock, FiCalendar, FiUsers } from "react-icons/fi";
import {motion} from 'framer-motion'
import {FadeRight} from '../../utility/Animation'
import { FadeLeft } from '../../utility/Animation';


const StudentImg = {
  backgroundImage: `url(${Studentpng})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
}

const ClassesNavbar = () => {

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
          centerPadding: "10px",
          // infinite: true,
        },
      },
    ]

  }

  return (
    <section>
      
      <div className='bg-light overflow-hidden relative'>
        {/* Hero Section */}
        <div className='container grid-cols-1 grid md:grid-cols-2 min-h-[600px]'>
          {/* Brand Info */}
          <div className='flex flex-col justify-center py-10
          md:py-0 relative z-20'>
            <div className='text-center md:text-left space-y-10 lg:max-w-[400px]'>
              <motion.h1
              variants={FadeRight(0.6)}
                              initial="hidden"
                              animate="visible"  
              className='text-3xl lg:text-5xl font-bold font-averia !leading-snug'>Let's Learn to build a {""}
                <span className='text-secondary'>Website</span> for your business
              </motion.h1>
              <motion.div 
              variants={FadeRight(0.9)}
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
            <img src={hero} className='w-[400px] xl:w-[500px]
            relative z-10 drop-shadow1' alt="" />

            {/* <img src={herobg} className='absolute -bottom-32 w-[800px]
            md:w-[1500px] z-[1] hidden md:block' alt="" /> */}
          </motion.div>

        </div>
      </div>

      {/* Class slider */}
      <div className="mb-20 py-7">
        <div className="container mx-auto px-4 p">
          {/* header section */}
          <div
           className='p-6 text-center max-w-[600px] mx-auto'>
            <motion.h1 
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className='uppercase font-bold font-averia text-4xl'>Online English Classes</motion.h1>
            <motion.p 
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className='font-mono text-base text-primary'>Fun and Effective Learning Atmosphere</motion.p>
          </div>

        </div>

        <div className="container">
          <Slider {...setting}>
            {ClassData.map((classItem) => (

              <div
              
                key={classItem.id}
                className="bg-card rounded-lg shadow-xl  py-10 px-7 transition-transform duration-300 hover:transform hover:scale-105"
              >
                <div className="flex flex-col space-y-4">
                  <div className={`${classItem.backgroundColor} box-shadow text-white text-primary-foreground rounded-md px-7 py-3`}>
                    <span className="font-bold">{classItem.type}</span>

                  </div>

                  <div className="flex items-center space-x-2 text-accent">
                    <FiCalendar className="w-5 h-5" />
                    <span>{classItem.day}</span>
                  </div>

                  <div className="flex items-center space-x-2 text-accent">
                    <FiClock className="w-5 h-5" />
                    <span className={`${classItem.textColor} font-semibold`}>
                      {classItem.time}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2 text-accent">
                    <FiUsers className="w-5 h-5" />
                    <span className="text-sm">{classItem.ageGroup}</span>
                  </div>
                  <div className='flex justify-center mt-5'>
                    <button className={`${classItem.backgroundColor} primary-btn1 flex items-center gap-2`}>

                      Free Level Test</button>
                  </div>

                </div>
              </div>
            ))}
            </Slider>
          </div>
        </div>
      

      {/* Grammar Class slider */}
      
      <div className="mb-10 mt-12 pb-10">
        <div className="container mx-auto px-4 p">
          {/* header section */}
          <div className='p-6 text-center max-w-[600px] mx-auto'>
            <h1 className='uppercase font-bold font-averia text-4xl'>Grammar Classes</h1>
            <p className='font-mono text-base text-primary'>Fun and Effective Learning Atmosphere</p>
          </div>

        </div>

        <div className="container">
          <Slider {...setting}>
            {GrammarClassData.map((classItem) => (

              <div
                key={classItem.id}
                className="bg-card rounded-lg shadow-xl max-w-[95%] py-10 px-7 transition-transform duration-300 hover:transform hover:scale-105"
              >
                <div className="flex flex-col space-y-4">
                  <div className={`${classItem.backgroundColor} box-shadow text-white text-primary-foreground rounded-md px-7 py-3`}>
                    <span className="font-bold">{classItem.type}</span>

                  </div>

                  <div className="flex items-center space-x-2 text-accent">
                    <FiCalendar className="w-5 h-5" />
                    <span>{classItem.day}</span>
                  </div>

                  <div className="flex items-center space-x-2 text-accent">
                    <FiClock className="w-5 h-5" />
                    <span className={`${classItem.textColor} font-semibold`}>
                      {classItem.time}
                    </span>
                  </div>

                  <div className="flex items-center space-x-2 text-accent">
                    <FiUsers className="w-5 h-5" />
                    <span className="text-sm">{classItem.ageGroup}</span>
                  </div>
                  <div className='flex justify-center mt-5'>
                    <button className={`${classItem.backgroundColor} primary-btn1 flex items-center gap-2`}>

                      Free Level Test</button>
                  </div>

                </div>
              </div>
            ))}
            </Slider>
          </div>
        </div>
      {/* Students section */}
      <div>
        <div style={StudentImg} className="container py-24 md:py-48">
          <div className='flex flex-col justify-center'>
            <div className="text-center space-y-4 lg:max-w-[430px] mx-auto">
              <h1 className='text-4xl font-bold !leading-snug'>1000+ students are learning from us</h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam culpa quos, modi quis
                iste ipsam magnam similique ab vel a. Voluptate natus ipsa error velit maxime saepe quam
                excepturi distinctio?</p>
            </div>
            <div className='flex justify-center mt-5'>
              <button className='primary-btn flex items-center gap-2'>
                <span><IoBagHandleOutline /></span>
                Subscribe</button>
            </div>
          </div>

        </div>
      </div>
    </section >
  )
}

export default ClassesNavbar