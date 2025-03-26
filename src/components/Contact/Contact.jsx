import React from 'react'
import BannerPng from '../../assets/contactus.jpg'
import Coverimage from '../../assets/bgcon1.jpg'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FadeRight } from '../../utility/Animation'

const CoverImg = {
    backgroundImage: `url(${Coverimage})`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
    width: "100%",
    height: "100%",
}

const Contact = () => {
    return (
        <section>
            {/* Banner Section */}
            {/* <div className='mb-20'>
                <div style={BannerImg} className="container py-10">
                    <div className='flex flex-col justify-center'>
                        <div className="text-center space-y-4 lg:max-w-[430px] mx-auto">
                            <h1 className='text-4xl font-bold text-black font-averia !leading-snug'>Your Hub for English, Printing, Software</h1>
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
            <div className='bg-light overflow-hidden mb-20'>
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
                                className='text-3xl lg:text-5xl font-bold font-averia !leading-snug'>Contact {""}
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
                                <button className='primary-btn flex items-center gap-2 group'>Get Started

                                </button>
                            </motion.div>
                        </div>
                    </div>
                    {/* Brand Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 200, rotate: 75 }}
                        animate={{ opacity: 1, x: 0, rotate: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className='flex flex-col justify-center'>
                        <img src={BannerPng} className='w-[400px] xl:w-[500px]' alt="" />

                    </motion.div>

                </div>
            </div>

            {/* Contact Form Section */}
            
                <div style={CoverImg} className="w-full max-w-6xl mx-auto grid  items-start md:grid-cols-[2fr_1fr] grid-cols-1
                 gap-16 p-12 rounded-3xl  bg-white font-[sans-serif] mb-10">


                    <form className="ml-auto space-y-4 font-averia">
                        <input type='text' placeholder='Name'
                            className="appearance-none placeholder:text-white  focus:placeholder:text-red-500 w-full text-green rounded-3xl py-4 px-4 bg-red-300 text-sm outline-red-500 focus:bg-transparent " />
                        <input type='email' placeholder='Email'
                            className="appearance-none w-full rounded-3xl py-4 px-4 bg-red-300 placeholder:text-white focus:placeholder:text-red-500 text-sm outline-red-500 focus:bg-transparent" />
                        <input type='text' placeholder='Phone'
                            className="appearance-none w-full rounded-3xl py-4 px-4 bg-red-300 placeholder:text-white focus:placeholder:text-red-500 text-sm outline-red-500 focus:bg-transparent" />
                        <textarea placeholder='Message' rows="6"
                            className="appearance-none w-full rounded-3xl px-4 bg-red-300 placeholder:text-white focus:placeholder:text-red-500 text-sm pt-3 outline-red-500 focus:bg-transparent"></textarea>
                        <button type='button'
                            className="text-white focus:placeholder:text-red-500 bg-red-300 hover:bg-red-600 tracking-wide rounded-3xl text-sm px-4 py-4 w-[35%] !mt-6">Send</button>
                    </form>

                    <div className='bg-red-100 px-8 py-12 rounded-xl'>
                        <h1 className="text-gray-800 text-3xl font-bold font-averia">Let's Talk</h1>
                        <p className="text-sm text-gray-500 mt-4">Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project  and provide help.</p>
                        <form className="ml-auto space-y-4 font-averia mt-4">
                            <input type='text' placeholder='Email'
                                className="appearance-none placeholder:text-white  focus:placeholder:text-red-500 w-full text-green rounded-3xl py-4 px-4 text-center bg-red-300 text-sm outline-red-500 focus:bg-transparent " />
                            <button type='button'
                                className="text-white focus:placeholder:text-red-500 bg-red-300 hover:bg-red-600 tracking-wide rounded-3xl text-sm px-4 py-4 w-full">Submit</button>
                        </form>

                    </div>
                </div>
           


            {/* social section */}
            <div className='container grid grid-cols-1 md:grid-cols-3 gap-20 mb-20'>
                {/* Email */}
                <div className="mt-12 bg-red-300 rounded-xl px-10 py-12 ">
                    <h2 className="text-red-500 text-base font-bold">Email</h2>
                    <ul className="mt-4">
                        <li className="flex items-center">
                            <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='bg-red-500'
                                    viewBox="0 0 479.058 479.058">
                                    <path
                                        d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                        data-original="#000000" />
                                </svg>
                            </div>
                            <a href="javascript:void(0)" className="text-black text-sm ml-4">
                                <small className="block font-medium">Mail</small>
                                <strong>info@example.com</strong>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Social */}
                <div className="mt-12 bg-red-300 rounded-xl px-10 py-10">
                    <h2 className="text-red-500 text-base font-bold">Socials</h2>

                    <ul className="flex mt-4 space-x-4">
                        <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <a href="javascript:void(0)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='bg-red'
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z"
                                        data-original="#000000" />
                                </svg>
                            </a>
                        </li>
                        <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <a href="javascript:void(0)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='bg-red'
                                    viewBox="0 0 511 512">
                                    <path
                                        d="M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.852 0 .5 28.352.5 63.195c0 34.852 28.352 63.2 63.203 63.2 34.848 0 63.195-28.352 63.195-63.2C126.898 28.352 98.551 0 63.703 0zm0 96.395c-18.308 0-33.203-14.891-33.203-33.2C30.5 44.891 45.395 30 63.703 30c18.305 0 33.195 14.89 33.195 33.195 0 18.309-14.89 33.2-33.195 33.2zm289.207 62.148c-22.8 0-45.273 5.496-65.398 15.777-.684-7.652-7.11-13.656-14.942-13.656h-96.406c-8.281 0-15 6.719-15 15V497c0 8.285 6.719 15 15 15h96.406c8.285 0 15-6.715 15-15V320.266c0-22.735 18.5-41.23 41.235-41.23 22.734 0 41.226 18.495 41.226 41.23V497c0 8.285 6.719 15 15 15h96.403c8.285 0 15-6.715 15-15V302.066c0-79.14-64.383-143.523-143.524-143.523zM466.434 482h-66.399V320.266c0-39.278-31.953-71.23-71.226-71.23-39.282 0-71.239 31.952-71.239 71.23V482h-66.402V190.664h66.402v11.082c0 5.77 3.309 11.027 8.512 13.524a15.01 15.01 0 0 0 15.875-1.82c20.313-16.294 44.852-24.907 70.953-24.907 62.598 0 113.524 50.926 113.524 113.523zm0 0"
                                        data-original="#000000" />
                                </svg>
                            </a>
                        </li>
                        <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                            <a href="javascript:void(0)">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill='bg-red'
                                    viewBox="0 0 24 24">
                                    <path
                                        d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z">
                                    </path>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Location */}
                <div className="mt-12 bg-red-300 rounded-xl px-10 py-10 ">
                    <h2 className="text-red-500 text-base font-bold">Location</h2>
                    <ul className="mt-4">
                        <li className="flex items-center">
                        <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
    <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 384 512">
        <path d="M192 0C86 0 0 86 0 192c0 87.6 127.5 271.6 168.4 330.4 12.3 17.5 39 17.5 51.2 0C256.5 463.6 384 279.6 384 192 384 86 298 0 192 0zm0 272c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z"/>
    </svg>
</div>

                            <a href="javascript:void(0)" className="text-black text-sm ml-4">
                                <small className="block font-medium">Patheingyi Township</small>
                                <strong>Mandalay, Myanmar</strong>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Google Map */}
            <div className="container mb-20">
                <div className='w-full h-96 rounded-3xl overflow-hidden'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3699.586989875531!2d96.16067157355762!3d21.98880885411716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30cb6fcb4bed94a9%3A0xedcce43ca547b9a9!2sPatheingyi%20Township%2Cnear%20Yankin%20mountain!5e0!3m2!1sen!2smm!4v1738045085319!5m2!1sen!2smm"
                        width="100%"
                        height="450" s
                        tyle="border:0;"
                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>
    )
}

export default Contact