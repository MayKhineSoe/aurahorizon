import React from 'react'
import BannerPng from '../../assets/aboutus.jpg'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FadeRight } from '../../utility/Animation'
import clicon from '../../assets/classicon.png'
import pricon from '../../assets/printericon.png'
import sficon from '../../assets/softwareicon.png'
import aboutimg from '../../assets/aboutus.avif'
import { FadeLeft } from '../../utility/Animation';


// const BannerImg = {
//   backgroundImage: `url(${BannerPng})`,
//   backgroundPosition: "center center",
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "cover",
//   width: "100%",
//   height: "100%",
// }

const About = () => {
  return (
    <section>
      {/* Banner Section */}
      {/* <div className='mb-20'>
        <div className="container py-10">
          <div className='flex flex-col justify-center'>
            <div className="text-center space-y-4 lg:max-w-[430px] mx-auto">
              <h1 className='text-4xl font-bold font-averia !leading-snug'>Your Hub for English, Printing, Software</h1>
              <p className='text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam culpa quos, modi quis
                iste ipsam magnam similique ab vel a. Voluptate natus ipsa error velit maxime saepe quam
                excepturi distinctio?</p>
            </div>
            <div className='flex justify-center mt-5'>
              <button className='primary-btn flex items-center gap-2'>
               
                <Link to="/services"> Our Services</Link></button>
            </div>
          </div>

        </div>
      </div> */}

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
                  className='text-3xl lg:text-5xl font-bold font-averia !leading-snug'>About {""}
                    <span className='text-secondary'>Us</span>
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
                    <button className='primary-btn flex items-center gap-2 group'>Contact
                    
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
                <img src={BannerPng} className='w-[400px] xl:w-[600px]
                        relative' alt="" />
    
             
              </motion.div>
    
            </div>
          </div>
      

      {/* About Us Section */}
      <div className="container ">
        <div>
          <motion.h1
            variants={FadeRight(1.4)}
            initial="hidden"
            animate="visible"
            className='text-4xl lg:text-4xl  text-center font-bold leading-relaxed xl:leading-relaxed font-averia'>
           Aura Horizon
          </motion.h1>
        </div>
                 

             
              <motion.p
                variants={FadeRight(1.7)}
                initial="hidden"
                animate="visible"
                className='text-gray-500 !leading-snug '>Empowering Learning, Creativity, and Innovation!
                Whether you want to master English, print high-quality materials, or develop
                custom software solutions, we’ve got you covered.Empowering Learning, Creativity, and Innovation!
                Whether you want to master English, print high-quality materials, or develop
                custom software solutions, we’ve got you covered.Empowering Learning, Creativity, and Innovation!
                Whether you want to master English, print high-quality materials, or develop
                custom software solutions, we’ve got you covered.
              </motion.p>

                         </div>
         

      {/* Services Section */}
      <div className='container py-12 mb-20'>
        <div
          className='p-6 text-center max-w-[600px] mx-auto'>
          <motion.h1
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
            className='font-bold font-averia text-4xl'>Our <span className='text-secondary'>Services</span></motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.6 }}
            className='font-mono text-base text-gray-400'>We Provide Best Offer in This Spring</motion.p>
        </div>

        <div className="flex flex-cols-1 md:flex-cols-3 justify-around">
       
        <motion.div 
        initial={{ opacity: 0, x: -200 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.9 }}
        className="bg-card rounded-lg shadow-md max-w-[300px]  py-10 px-7 transition-transform duration-300 hover:transform hover:scale-105"
        >
          <div className="flex flex-col space-y-4 ">
            <div className='box-shadow1  text-primary-foreground rounded-md px-7 py-3'>
              <div className='flex justify-center mb-6'>  
                            <img src={clicon} className='w-24' />
              </div>
              <h3 className="font-bold text-xl text-center ">Online Education</h3>
            </div>
          </div>
        </motion.div>

        <motion.div 
         initial={{ opacity: 0, x: -200 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 1, delay: 2.1}}
        className="bg-card rounded-lg shadow-md max-w-[300px]  py-10 px-7 transition-transform duration-300 hover:transform hover:scale-105"
        >
          <div className="flex flex-col space-y-4 ">
            <div className='box-shadow1  text-primary-foreground rounded-md px-7 py-3'>
              <div className='flex justify-center mb-6'>  
                            <img src={pricon} className='w-24' />
              </div>
              <h3 className="font-bold text-xl text-center ">Printing Service</h3>
            </div>
          </div>
        </motion.div>

        <motion.div 
         initial={{ opacity: 0, x: -200 }}
         whileInView={{ opacity: 1, x: 0 }}
         transition={{ duration: 1, delay: 2.4 }}
        className="bg-card rounded-lg shadow-md max-w-[300px] py-10 px-7 transition-transform duration-300 hover:transform hover:scale-105"
        >
          <div className="flex flex-col space-y-4 ">
            <div className='box-shadow1  text-primary-foreground rounded-md px-7 py-3'>
              <div className='flex justify-center mb-6'>  
                            <img src={sficon} className='w-24' />
              </div>
              <h3 className="font-bold text-xl text-center ">Software Service</h3>
            </div>
          </div>
        </motion.div>
        </div>

      </div>
    </section>
  )
}

export default About