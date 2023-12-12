import React from 'react'
import Header from '../components/Header'
import Footer from "../components/Footer";
export default function Guest() {
    return (
        <div>
            <Header />
            <div>
                <div className='mt-24 mb-10 flex justify-center  '>
                    <img className=' chinesse md:mr-10' src='./chii.webp' />
                    <img className='eyes' src='./fem_eyes.webp' />
                    <img className='chinesse md:ml-10' src='./fib.webp' />
                </div>
                <div className='mt-20 mb-20 sooop gap-40 flex justify-center'>
                    <div className=''>
                        <p className='story_head_text'>OUR RULES </p>
                        <p className='story_sub_text'>SIMPLE, CLEAR</p>
                        <p className='story_sub_text'>AND UNBREAKABLE</p>

                    </div>

                    <div className='story_main_text'>
                        <p className='mt-4'>To ensure that our guests fully enjoy the process, have fun, relax and feel the holiday that we try to broadcast every day, our restaurant has certain rules.</p>
                        <p className='mt-4'>For your convenience, please read the rules before you visit THE CULT Restaurant. If you have any questions, feel free to email us and we will be happy to help </p>
                        <p className='mt-4'>This is our fiery love letter to our otaku (and everyone else), our food, and our favourite caracters of
                            anime.</p>
                        <p className='welcome_cult mt-10'>Team THE CULT x</p>
                    </div>
                </div>

                <div className='mt-10'>
                    <div className='guest_card_two'>
                        <div className='guest_card_text'>
                            <p className='guest_header'>TABLE
                            </p>
                            <p className='guest_header mb-6'>BOOKING SYSTEM
                            </p>
                            <p>Every day our restaurant is filled with dozens of people, book a table in two clicks and we will find the perfect spot: in silence by a panoramic window, closer to a movie projector with iconic anime or overlooking the stunning open kitchen.
                            </p>
                        </div>
                    </div>
                    <div className='guest_card_one'>
                        <div className='guest_card_text'>
                            <p className='guest_header'>PET</p>
                            <p className='guest_header mb-6'>FRIENDLY PLACE</p>
                            <p>You can come to us in the company of your pet, but the main thing is that it must be well-mannered and not disturb other guests and their pets. It is important to us that all visitors feel comfortable and cozy at THE CULT.
                            </p>
                        </div>
                    </div>
                    <div className='guest_card_three'>
                        <div className='guest_card_text'>
                            <p className='guest_header'>LAPTOP
                            </p>
                            <p className='guest_header mb-6'>FREE PLACE</p>
                            <p> THE CULT is about a holiday every day! Bright impressions, lively communication, memorable moments and enjoying the magic of each dish. The last thing we want to be
                                is a typical co-working place :(
                            </p>
                        </div>
                    </div>
                    <div className='guest_card_four'>
                        <div className='guest_card_text'>
                            <p className='guest_header'> GLUTEN FREE
                            </p>
                            <p className='guest_header mb-6'>FRIENDLY PLACE</p>
                            <p> Whether you’re following a gluten-free diet due to celiac disease, a sensitivity to gluten or personal preference, you don’t have to give up your favorite dishes. Gluten-Free Noodles always are available for customers in THE CULT.
                            </p>
                        </div>
                    </div>
                    <div className='guest_card_five'>
                        <div className='guest_card_text'>
                            <p className='guest_header'> DIVERSITY
                            </p>
                            <p className='guest_header mb-6'>FRIENDLY PLACE</p>
                            <p> The location and interior of our restaurant have been thought out to the smallest detail, so that each guest was the most comfortable and convenient.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='card_div'>
                    <div className='card_texts flex justify-center'>
                        <img className='cardy' src='./cardy.webp' />
                        <div className='second_page_text ml-6'>
                            <p className='second_page_book_head'>THE CULT</p>
                            <p className='second_page_book_head'>GIFT VOUCHER
                            </p>
                            <div className='second_page_book_sub voucher_text'>
                                <p>Need a gift voucher? Gift an unforgettable experience to that special someone with a THE CULT voucher. The gift voucher can be spent in installments until all funds are exhausted!.</p>

                                <p className='mt-12'>The gift voucher is valid only for visits to the restaurant and does not apply to attendance at THE CULT themed events.</p>
                            </div>
                            <button className='second_page_book_btn'>
                                GET VOUCHER
                            </button>
                        </div>
                    </div>
                    <div className='mountain_bg '></div>
                </div>
                <center className='shupe mt-10 '>
                            <p className='second_page_book_head'>INGRIDENT GLOSSARY</p>
                            <div className='second_page_book_sub voucher_text'>
                                <p>The chef and waiters don’t have to be the only ones who can decipher the ingredients on the menu. Our glossary is a complete collection of ingredients used in the kitchen.</p>
                                <p className='mt-12'>Don’t be afraid to try, pleasant gastronomic discoveries are waiting for you!</p>
                            </div>
                        </center>
                <div className='card_div2'>
                    <div className='card_texts_2 flex justify-center'>
                        <img className='cardy' src='./Lguy.webp' />
                        <center className='second_page_text heyy mt-10 '>
                            <p className='second_page_book_head'>INGRIDENT GLOSSARY</p>
                            <div className='second_page_book_sub voucher_text'>
                                <p>The chef and waiters don’t have to be the only ones who can decipher the ingredients on the menu. Our glossary is a complete collection of ingredients used in the kitchen.</p>
                                <p className='mt-12'>Don’t be afraid to try, pleasant gastronomic discoveries are waiting for you!</p>
                            </div>
                        </center>
                        <img className='cardy' src='./Rguy.webp' />

                    </div>
                    <div className='mount_bg '></div>
                    <center className='bbb grid grid-cols-3 gap-4'>
                       
                        <div className='mountain_cards'>
                            <p className='mountain_header'> GOMA DARE SAUCE</p>
                            <p className='mountain_sub mt-4'>Goma dare is a delicious creamy sesame and tahini based sauce. It’s perfect for dipping pork and veggies, drizzling over crisp salads or freshly cooked noodles.</p>
                        </div>
                        <div className='mountain_cards'>
                            <p className='mountain_header'> GOMA DARE SAUCE</p>
                            <p className='mountain_sub mt-4'>Goma dare is a delicious creamy sesame and tahini based sauce. It’s perfect for dipping pork and veggies, drizzling over crisp salads or freshly cooked noodles.</p>
                        </div>
                        <div className='mountain_cards'>
                            <p className='mountain_header'> GOMA DARE SAUCE</p>
                            <p className='mountain_sub mt-4'>Goma dare is a delicious creamy sesame and tahini based sauce. It’s perfect for dipping pork and veggies, drizzling over crisp salads or freshly cooked noodles.</p>
                        </div>


                        <div className='mountain_cards'>
                            <p className='mountain_header'> GOMA DARE SAUCE</p>
                            <p className='mountain_sub mt-4'>Goma dare is a delicious creamy sesame and tahini based sauce. It’s perfect for dipping pork and veggies, drizzling over crisp salads or freshly cooked noodles.</p>
                        </div>
                        <div className='mountain_cards'>
                            <p className='mountain_header'> GOMA DARE SAUCE</p>
                            <p className='mountain_sub mt-4'>Goma dare is a delicious creamy sesame and tahini based sauce. It’s perfect for dipping pork and veggies, drizzling over crisp salads or freshly cooked noodles.</p>
                        </div>
                        <div className='mountain_cards'>
                            <p className='mountain_header'> GOMA DARE SAUCE</p>
                            <p className='mountain_sub mt-4'>Goma dare is a delicious creamy sesame and tahini based sauce. It’s perfect for dipping pork and veggies, drizzling over crisp salads or freshly cooked noodles.</p>
                        </div>


                        <div className='mountain_cards'>
                            <p className='mountain_header'> GOMA DARE SAUCE</p>
                            <p className='mountain_sub mt-4'>Goma dare is a delicious creamy sesame and tahini based sauce. It’s perfect for dipping pork and veggies, drizzling over crisp salads or freshly cooked noodles.</p>
                        </div>
                        <div className='mountain_cards'>
                            <p className='mountain_header'> GOMA DARE SAUCE</p>
                            <p className='mountain_sub mt-4'>Goma dare is a delicious creamy sesame and tahini based sauce. It’s perfect for dipping pork and veggies, drizzling over crisp salads or freshly cooked noodles.</p>
                        </div>
                        <div className='mountain_cards'>
                            <p className='mountain_header'> GOMA DARE SAUCE</p>
                            <p className='mountain_sub mt-4'>Goma dare is a delicious creamy sesame and tahini based sauce. It’s perfect for dipping pork and veggies, drizzling over crisp salads or freshly cooked noodles.</p>
                        </div>
                    </center>
                </div>

            </div>
            <center className='mt-14 mb-10'>
                <p className='lucky'>BOOK YOUR LUCKY TABLE AT THE CULT WITH A SIMPLE ONLINE FORM OR ORDER DELIVERY</p>
                <div className=' '>
                    <button className='second_page_book_btn mr-6'>
                        BOOK IN
                    </button>
                    <button className='second_page_book_btn'>
                        SHOP NOW
                    </button>
                </div>
            </center>

            <center>
                <img className='creamy' src='./cream.webp' />
            </center>
            <Footer />
        </div>
    )
}
