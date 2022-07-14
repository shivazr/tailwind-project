import React from 'react'
import {
    FaFacebookF,
    FaInstagram,
    FaTwitterSquare,
    FaGithubSquare,
    FaDribbbleSquare
} from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='w-full mt-24 bg-slate-900 text-gray-300 py-y px-2'>
            <div className="max-w-[1024px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
                <div>
                    <h6 className="font-bold uppercase pt-2">Solutions</h6>
                    <ul>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Data</li>
                        <li className='py-1'>Cloud</li>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Data</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-bold uppercase pt-2">Support</h6>
                    <ul>
                        <li className='py-1'>Pricing</li>
                        <li className='py-1'>Data</li>
                        <li className='py-1'>Cloud</li>
                        <li className='py-1'>Marketing</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-bold uppercase pt-2">Company</h6>
                    <ul>
                        <li className='py-1'>About</li>
                        <li className='py-1'>Blog</li>
                        <li className='py-1'>Cloud</li>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Data</li>
                    </ul>
                </div>
                <div>
                    <h6 className="font-bold uppercase pt-2">legal</h6>
                    <ul>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Data</li>
                        <li className='py-1'>Cloud</li>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>Data</li>
                    </ul>
                </div>
                <div className="pt-8 col-span-2 md:pt-2">
                    <p className='font-bold uppercase'>Subscibe to our newsletter</p>
                    <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur vero nesciunt </p>
                    <form className='flex flex-col sm:flex-row'>
                        <input className='w-full p-2 rounded-md mb-4' type="email" placeholder='Enter email'/>
                        <button className='p-2 mb-4'>Subscribe</button>
                    </form>
                </div>
            </div>

            <div className="flex flex-col max-w=[1240px] px-2 py-4 m-auto justify-between sm:flex-row text-center text-gray-500">
                <p className='py-4'>2022 by Sheeva.zr</p>
                <div className="flex justify-between  sm:w-[300px] pt-4 text-2xl">
                    <FaFacebookF />
                    <FaInstagram />
                    <FaTwitterSquare />
                    <FaGithubSquare />
                    <FaDribbbleSquare />
                </div>
                </div>
            </div>
            )
}

            export default Footer
