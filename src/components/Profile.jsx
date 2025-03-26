import React from 'react'
import { motion } from 'framer-motion'
import { FadeRight } from '../utility/Animation'
import vector from '../assets/vector.png'
import { FaPhone, FaEnvelope, FaFacebookF, FaTiktok, FaYoutube, FaMapMarkerAlt, FaQrcode } from "react-icons/fa";


const Profile = () => {
    return (
        <div className="relative  shadow-[5px_5px_rgba(200,_100,_120,_0.4),_10px_10px_rgba(200,_100,_120,_0.3),_15px_15px_rgba(200,_100,_120,_0.2),_20px_20px_rgba(200,_100,_120,_0.1),_25px_25px_rgba(200,_100,_120,_0.05)]
 bg-gradient-to-r h-[750px] from-red-100 to-sky-50 mt-8 mb-8 max-w-sm mx-auto bg-white rounded-2xl  overflow-hidden transform transition-all duration-300"
        >
            {/* Wavy Header */}
            <div className="relative">
                <svg
                    className="absolute top-0 left-0 w-full"
                    viewBox="0 0 500 150"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,0 C150,100 350,0 500,100 L500,0 L0,0 Z"
                        className="fill-red-600"
                    ></path>
                </svg>
            </div>

            {/* Profile Image */}
            <motion.div
                variants={FadeRight(0.5)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col   items-center mt-16">
                <div className="relative shadow-[5px_5px_rgba(200,_100,_120,_0.4),_10px_10px_rgba(200,_100,_120,_0.3),_15px_15px_rgba(200,_100,_120,_0.2),_20px_20px_rgba(200,_100,_120,_0.1),_25px_25px_rgba(200,_100,_120,_0.05)]  mt-4 mb-4 w-36 h-36 flex items-center justify-center rotate-45 border-4 border-red-400 shadow-3xl">

                    <img
                        className="w-36 h-36  rotate-[-45deg]   rounded-full"
                        src={vector}

                    />
                </div>
                <motion.div
                    variants={FadeRight(0.8)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="mt-8 text-center">
                    <h2 className="text-2xl font-bold font-serif text-red-600">Naing Ye Khant</h2>
                    <p className="text-sm mt-2 font-serif tracking-widest text-stone-500">Director</p>
                    <p className="text-sm mt-2 font-serif tracking-widest mb-4 text-stone-600">Aura Horizon Education Group.Ltd</p>
                </motion.div>
            </motion.div>

            {/* Contact Info */}

            <div className="relative bg-gradient-to-r from-red-100 to-sky-50 max-w-sm mx-auto bg-white overflow-hidden transform transition-all duration-300">
                {/* Vertical Background for Icons */}
                <div className="absolute rounded-es-3xl left-6 top-0 h-full w-12 bg-red-500 flex flex-col items-center justify-center space-y-8 py-8">
                    <FaPhone className="text-white text-xl" />
                    <FaEnvelope className="text-white text-xl" />
                    <FaFacebookF className="text-white text-xl" />
                    <FaTiktok className="text-white text-xl" />
                    <FaYoutube className="text-white text-xl" />
                    <FaMapMarkerAlt className="text-white text-xl" />
                </div>

                {/* Contact Details */}
                <div className="pl-24 p-8 space-y-6 font-serif tracking-wide">
                    <motion.div
                        variants={FadeRight(0.9)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex items-center gap-4 text-stone-700">
                        <a href='tel:+959979384056'>
                            <FaPhone className="text-red-500 text-xl hidden" /> +959 979384056

                        </a>                    </motion.div>
                    <motion.div
                        variants={FadeRight(1)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex items-center gap-4 text-stone-700">
                        <a href='mailto:naingyekhant@aurahorizon.org?subject=Hello&body=I want to know more about your services!'>
                            <FaEnvelope className="text-red-500 text-xl hidden" /> naingyekhant@aurahorizon.org

                        </a>                    </motion.div>

                    <motion.div
                        variants={FadeRight(1.1)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex items-center gap-4 text-stone-700">
                        <a href='https://www.facebook.com/share/1AMs1MUejJ/' target="_blank"
                            rel="noopener noreferrer">
                            <FaFacebookF className="text-red-500 text-xl hidden" /> AuraHorizon
                        </a>
                    </motion.div>
                    <motion.div
                        variants={FadeRight(1.1)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex items-center gap-4 text-stone-700">
                        <a href='https://www.tiktok.com/@tr.nared?_t=ZS-8uELbncFMoC&_r=1' target="_blank"
                            rel="noopener noreferrer">
                            <FaTiktok className="text-red-500 text-xl hidden" /> TikTok
                        </a>
                    </motion.div>
                    <motion.div
                        variants={FadeRight(1.1)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex items-center gap-4 text-stone-700">
                        <a href='https://youtube.com/@naredelectronics576?si=Oj4rzyS1scOuqiBq' target="_blank"
                            rel="noopener noreferrer">
                            <FaYoutube className="text-red-500 text-xl hidden" /> YouTube
                        </a>
                    </motion.div>
                    
                    <motion.div
                        variants={FadeRight(1.2)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="flex items-center gap-4 text-stone-700">
                        <a href='https://maps.app.goo.gl/mZSgFePXestkDjKV8'  target="_blank" 
   rel="noopener noreferrer" >
                            <FaMapMarkerAlt className="text-red-500 text-xl hidden" /> 59C, 16*17, Mandalay

                        </a>
                    </motion.div>
                </div>
            </div>

            {/* Wave Footer */}
            <div className="relative">
                <svg
                    className="absolute top-0 left-0 w-full"
                    viewBox="0 0 500 150"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M0,150 L500,0 L500,150 L0,150 Z"
                        className="fill-red-600"
                    ></path>
                </svg>
            </div>

            {/* Save Contact Button */}
            {/* <div className="mt-6 px-6 pb-6">
                        <button className="w-full px-4 py-2 bg-red-600 text-white rounded-lg shadow-md hover:bg-pink-600 transition duration-300">
                            Save Contact
                        </button>
                    </div> */}
        </div>





    )
}

export default Profile