import React from 'react'
import BannerPng from '../../assets/banner.jpg'
import detail1 from '../../assets/detail1.jpg'
import { motion } from 'framer-motion'
import { FadeLeft } from '../../utility/Animation'
import { IoBagHandleOutline } from 'react-icons/io5'

const bgStyle = {
    backgroundImage: `url(${BannerPng})`,
    backgroundPosition: "center",
    backgroudSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
}

const Banner = () => {
    return (
        <div className='container'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2">
                <div>
                    <img src={detail1} alt="" />
                </div>
                <div>
                    <h1 className='text-3xl md:text-4xl pb-10 font-bold font-averia'>English Classes</h1>
                    <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ratione voluptas dolores repellendus nostrum placeat consectetur
                        enim numquam dicta et, aperiam, tempore ut obcaecati fugiat consequatur
                        veritatis ab ipsa illum tempora?</p>
                </div>
            </div>
        </div>
    )
}

export default Banner