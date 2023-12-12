import React from 'react'
import Header from '../components/Header'
import Footer from "../components/Footer";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default function story() {
    let settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
    return (
        <div>
            <Header />
            <div className='mt-24 mb-10 flex justify-center  '>
                <img className=' chinesse mr-4' src='./p1.webp' />
                <img className='eyes' src='./eyez.webp' />
                <img className='chinesse ml-4' src='./p2.webp' />
            </div>
            <div className='mt-20 mb-20 sooop gap-40 flex justify-center'>
                <div className=''>
                    <p className='story_head_text'>WHO ARE WE </p>
                    <p className='story_sub_text mt-4'>PEACE, LOVE AND </p>
                    <p className='story_sub_text'>ICONIC ANIME FOODS</p>
                </div>

                <div className='story_main_text'>
                    <p className='mt-4'>We returned to our roots to finally build the company
                        of our dreams — one that proudly reclaims + celebrates the multitudes to be found in Asian flavors!</p>
                    <p className='mt-4'>THE CULT — is our little haven, as a place to give back to our community the best way we know how: by
                        giving you a place to meet, share stories and create memories.</p>
                    <p className='mt-4'>This is our fiery love letter to our otaku (and everyone else), our food, and our favourite caracters of
                        anime.</p>
                    <p className='mt-4'> Pull up a stool and grab a bowl . Welcome to our house.</p>
                    <p className='welcome_cult mt-10'>Team THE CULT x</p>
                </div>
            </div>

            <div className='flex justify-center mv_img '>
                <img className='mvimg' src='./right.webp' />
                <img className='mvimg' src='/left.webp' />
            </div>
            <img className='barw' src='./bar.webp' />
            <div className='flex justify-around mb-12'>
                <img className='first_pp' src='./pp1.webp' />
                <img className='second_pp' src='./pp2.webp' />
            </div>
            <div className='flex mt-20 justify-around'>
                <div>
                    <img className='pie_slice mb-10' src='./pie.webp' />
                    <img className='first_pp ml-10 mt-10' src='./drag.webp' />


                </div>
                <div>
                    <p className='mission_head'>OUR MISSION</p>
                    <p className='mission_text mt-10 mb-20'>WE STARTED THE RESTURANT TO BRING PROUD , LOUD <br /> JAPAN FLAVORS TO YOUR FINGERTIPS ANY DAY <br /> OF THE WEEK . NO MORE DILUTED DISHES <br /> NO MORE CULTURAL COMPROMISE</p>

                    <img className='first_pp imaginatio ml-20 mt-14' src='./dra.webp' />
                </div>
                <img className='right_pie' src='./right_pie.webp' />
            </div>
            <div className='flex fanbooy justify-around mt-24'>
                <img className='fanboy' src='./fanboy.webp' />
                <div>
                    <img className='crop' src='./crop.webp' />
                    <div className='flex justify-between'>
                        <div className='chef_text'>
                            <p className='chef_head'> MAIN WIZARD <br /> TAKESHI KITANO
                            </p>
                            <p>Our chef Takeshi came from Tokyo to promote Japanese cuisine, making it simple for the chef and divine for the diners — that’s his longtime mission. Now in our open kitchen, he lovingly and happily prepares authentic dishes from the best of anime for you.</p>
                            <button className='second_page_book_btn'>
                                BOOK YOURSELF IN
                            </button>
                        </div>
                        <img className='leaf' src='./leaf.webp' />
                    </div>
                </div>
            </div>

            <div className="carousel mt-24">
                <Slider {...settings}>
                    <div >
                        <img src="./fr1.webp" />
                    </div>
                    <div  >
                        <img src="./fr2.webp" />
                    </div>
                    <div  >
                        <img src="./fr3.webp" />
                    </div>
                    <div  >
                        <img src="./fr4.webp" />
                    </div>
                    <div  >
                        <img src="./fr5.webp" />
                    </div>
                    <div  >
                        <img src="./fr7.webp" />
                    </div>
                </Slider>
            </div>
            <Footer />

        </div>
    )
}
