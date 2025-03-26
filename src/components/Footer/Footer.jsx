import React from 'react'
import Footerpng from '../../assets/footer.jpg'
import { FaDumbbell, FaFacebook, FaInstagram, FaLinkedin,
    FaLocationArrow, FaMobileAlt,
    FaTiktok,
    FaYoutube
 } from 'react-icons/fa'
import { Link } from 'react-router-dom'


const BannerImg = {
    backgroundImage: `url(${Footerpng})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    height: "100%",
}

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "English Classes",
        link: "/englishclasses",
    },
    {
        title: "Printing Services",
        link: "/printingservices",
    },
    {
        title: "About",
        link: "/about",
    },
    {
        title: "Contact Us",
        link: "/contactus",
    },
]

const Footer = () => {
    return (
        <section className='text-white bg-red-600 bg-opacity-50'>
            <div className='container'>
                <div data-aos="zoom-in" className='grid grid-cols-1 md:grid-cols-3 pb-44 pt-5'>
                    {/* company Details */}
                    <div className='py-8 px-4'>
                        <div className='text-2xl flex items-center gap-2 mb-3 font-bold uppercase '>
                            <FaDumbbell />
                            <p>Aura</p>
                            <p className='text-secondary'>Horizon</p>

                        </div>
                        <p>Aura Horizon Education Group .Ltd သည် ပညာရေးနှင့် သက်ဆိုင်သော ဝန်ဆောင်မှုများကို ဆောင်ရွက်ပေး 
                        သည့် လုပ်ငန်းဖြစ်ပါသည်။ Online English သင်တန်းများ၊ စာစီစာရိုက်၊ပုံနှိပ်လုပ်ငန်းများ နှင့် ပညာရေးနှီးနွယ်လုပ်ငန်းများကို နည်းပညာဝန်ဆောင်မှုပေးခြင်းတို ဆောင်ရွက်ပေးလျက်ရှိပါသည်။</p>
                    </div>
                    {/* Footer links */}
                    <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2
                md:pl-10'>
                        <div>
                            <div className='py-8 px-4'>
                                <h1 className='sm:text-xl text-xl font-bold sm:text-left
                             text-justify mb-3'>Important Links</h1>
                             <ul className='flex flex-col gap-3'>
                                {
                                    FooterLinks.map((link) => (
                                        <li className='cursor-pointer hover:text-primary hover:translate-x-1
                                        duration-300' key={link.title}>
                                            <span><Link to={link.link}>{link.title}</Link></span>
                                        </li>
                                    ))
                                }
                             </ul>
                            </div>
                        </div>
                        <div>
                            <div className='py-8 px-4'>
                                <h1 className='sm:text-xl text-xl font-bold sm:text-left
                             text-justify mb-3'>Links</h1>
                             <ul className='flex flex-col gap-3'>
                                {
                                    FooterLinks.map((link) => (
                                        <li className='cursor-pointer hover:text-primary hover:translate-x-1
                                        duration-300' key={link.title}>
                                        <span> <Link to={link.link}> {link.title}</Link> </span>  
                                        </li>
                                    ))
                                }
                             </ul>
                            </div>
                        </div>
                        {/* Social Links */}
                        <div>
                            <div className='flex items-center gap-3 mt-6'>
                                <a href="https://youtube.com/@naredelectronics576?si=Oj4rzyS1scOuqiBq" target="_blank" rel="noopener noreferrer">
                                    <FaYoutube className='text-3xl' />
                                </a>
                                <a href="https://www.facebook.com/share/1AMs1MUejJ/" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook className='text-3xl' />
                                </a>
                                <a href="https://www.tiktok.com/@tr.nared?_t=ZS-8uELbncFMoC&amp;_r=1" target="_blank" rel="noopener noreferrer">
                                    <FaTiktok className='text-3xl' />
                                </a>
                            </div>
                            <div className='mt-6'> 
                                <div className='flex items-center gap-3'>
                                    <FaLocationArrow />
                                    <p><a href="https://maps.app.goo.gl/SsM5PT9TQUW3KWdV6" target="_blank" rel="noopener noreferrer">59C, 16*17, Mandalay</a></p>
                                </div>
                                <div className='flex items-center gap-3'>
                                    <FaMobileAlt />
                                    <p><a href='tel:+959 979384056'>+959 979384056</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Footer