import React from 'react'
import { MdCastForEducation } from "react-icons/md";
import { TfiPrinter } from "react-icons/tfi";
import { SiBmcsoftware } from "react-icons/si";
import { motion } from 'framer-motion'
import { FadeLeft } from '../../utility/Animation';
import { IoBagHandleOutline } from 'react-icons/io5';
import Logo1 from '../../assets/Logo1.png';
import Logo2 from '../../assets/Logo2.png';
import Logo3 from '../../assets/Logo3.png';


const EquipmentData = [
    {
        id: 1,
        title: "English Classes",
        link: '/',
        image: Logo1,
        delay: 0.3,
    },
    {
        id: 2,
        title: "N & B Printing Service",
        link: '/',
        image: Logo2,
        delay: 0.6,
    },
    {
        id: 1,
        title: "Nared Industries \n Technological Services",
        link: '/',
        image: Logo3,
        delay: 0.9,
    },
]

const Equipments = () => {
    return (
        <div>
            <div className="container pt-12 pb-20">
                <div className=" gap-6 font-averia">
                    <motion.div
                        initial={{ opacity: 0, x: -200 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className='space-y-4 p-6'>
                        <h1 className='text-3xl md:text-4xl pb-10 font-bold'>What we offer for you</h1>
                        {/* <p className='text-gray-500'>It is a long established fact that a reader readable</p> */}
                    </motion.div>

                    <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
                        {EquipmentData.map((item) => {
                            return (
                                <motion.div
                                    variants={FadeLeft(item.delay)}
                                    initial={"hidden"}
                                    whileInView={"visible"}
                                    className='bg-white rounded-3xl shadow-[0_0_22px_0_rgba(0,0,0,0.15)] 
                            flex flex-row justify-center items-center py-5'>

                                    <img src={item.image} className='w-[100px] h-[80px] object-contain ' />
                                    <div className='px-2'>
                                        <p className='text-xl font-semibold py-2'>{item.title}</p>
                                        {/* <button className='primary-btn flex items-center gap-1'>
                                            <span><IoBagHandleOutline /></span>
                                            {item.detail} </button> */}
                                    </div>

                                </motion.div>

                            )
                        })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Equipments