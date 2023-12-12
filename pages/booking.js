import React from 'react'
import Header from '../components/Header'
import Footer from "../components/Footer";

export default function Booking() {
    return (
        <div>
            <Header />
            <div className='mt-14 flex justify-center  '>
                <img className='quotes' src='./chi.webp' />
                <img className='eyes' src='./eyes.webp' />
                <img className='quotes' src='./nes.webp' />
            </div>

            <div className='flex formContent justify-center'>
                <div >
                    <img className='girl mb-14' src='./girl.webp' />
                    <img className='drinks' src='./d1.webp' />
                </div>
                <div className='tablesReservation'>
                    <p className='reserve'>MAKE TABLE RESERVATION</p>
                    <p className='reserve'>FOR YOUR BANQUEST</p>
                   
                    <div className='inputbars mt-10'>
                        <input placeholder=' NAME' className='barrs' />
                        <input placeholder='PHONE NUMBER' className='barrs' />
                        <input placeholder='EMAIL ADRESS' className='barrs' />
                        <input placeholder='DATE' className='barrs' />
                        <input placeholder='TIME' className='barrs' />
                        <input placeholder='GUEST' className='barrs' />
                        <input placeholder='TABLE REQUEST' className='barr' />
                        <div className='flex mt-8'>
                            <div className='check'>

                            </div>
                            <p>By selecting «Confirm reservation» you are agreeing  <br/>
                                to the terms and conditions of the User Agreement and Privacy Policy</p>
                        </div>
                        <div className='order'>
                            PLACE ORDER
                        </div>
                    </div>


                </div>
                <div>
                    <img className='drinks mb-14 D2' src='./d2.webp' />
                    <img className='man' src='./man.png' />
                </div>
            </div>
            <Footer />
        </div>
    )
}
