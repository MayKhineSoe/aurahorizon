import React from 'react'
import {IoBagHandleOutline} from 'react-icons/io5'
// import '../../index.css'
import Heropng from '../../assets/coder2.png'
import Smallpng from '../../assets/small2.png'
import {motion} from 'framer-motion'
import {FadeRight} from '../../utility/Animation'

const Hero = () => {
  return (
    <section> 
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[620px] relative">
            {/* Brand Info */}
            <div className='flex flex-col justify-center py-3 md:py-0 relative z-10'>
              <div className='text-center md:text-left space-y-6 lg:max-w-[400px]'>
                <motion.h1 
                variants={FadeRight(0.6)}
                initial="hidden"
                animate="visible" 
                className='text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-relaxed font-averia'>
                  All
                <br />
                In One <span className='text-secondary'> Place!</span>
                </motion.h1>
                <motion.p 
                variants={FadeRight(0.9)}
                initial="hidden"
                animate="visible" 
                 className='text-xl tracking-wide'>Your One-Stop Solution for Success!</motion.p>
                <motion.p
                variants={FadeRight(1.2)}
                initial="hidden"
                animate="visible"  
                className='text-gray-400'>Empowering Learning, Creativity, and Innovation! 
                Whether you want to master English, print high-quality materials, or develop
                 custom software solutions, we’ve got you covered.
                </motion.p>

                {/* button section */}
                <motion.div
                variants={FadeRight(1.5)}
                initial="hidden"
                animate="visible"  
                className='flex justify-center md:justify-start'>
                  <button className='primary-btn flex items-center gap-2'>
                    <span><IoBagHandleOutline /></span>
                    Detail</button>
                </motion.div>
              </div>
            </div>

            {/* Hero Image */}
            <div className='flex justify-center items-center'>
              <motion.img
              initial={{opacity: 0, x: 200, rotate: 75}}
              animate={{opacity: 1, x: 0, rotate: 0}}
              transition={{duration: 1, delay: 0.2}}
               src={Heropng} className='w-[350px] md:w-[550px] drop-shadow' />
            </div>

            {/* Small Image */}
            {/* <div className='absolute top-20 md:top-0 right-1/2 blur-sm opacity-70 rotate-[50deg]'>
              <motion.img
              initial={{opacity: 0, y: -200, rotate: 75}}
              animate={{opacity: 1, x: 0, rotate: 0}}
              transition={{duration: 1, delay: 1.5}}

              src={Smallpng} className='w-[150px] md:w-[300px]' />
            </div> */}
        </div>
    </section>
  )
}

export default Hero