import React from 'react'
import { FiPhone } from 'react-icons/fi'
import { HiOutlineAcademicCap } from 'react-icons/hi'
import { TbWorld } from 'react-icons/tb'
import { AiOutlineArrowRight } from 'react-icons/ai'
import support from '../components/img/s.webp'


const Support = () => {
    return (
        <div name='support' className='w-fullmt-24'>
            <div className="w-full h-[700px] bg-gray-900/90 absolute">
                <img className='w-full h-full object-cover mix-blend-overlay' src={support} />
            </div>
            <div className="mx-auto max-w-[1024px] text-white relative">
                <div className="px-4 py--12">
                    <h2 className='text-3xl pt-8 text-slate-300 uppercase text-center'>Support</h2>
                    <h3 className='text-5xl font-bold text-center py-6'>Finding the right team</h3>
                    <p className='py-4 text-3xl text-slate-300'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti asperiores quisquam, nam sed cum laboriosam, aperiam omnis eos,
                        amet molestiae nemo iste quaerat deserunt voluptatum laudantium explicabo dignissimos eius perspiciatis!</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black">
                    <div className="bg-white rounded-xl shadow-2xl">
                        <div className="p-8">
                            <FiPhone className='w-[40px] h-[40px]  bg-indigo-600 text-white rounded-lg mt-[-3rem] ' />
                            <h1 className='font-bold text-2xl my-6'>Sales</h1>
                            <p className='text-xl text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab ad iure dolorum magni
                                eveniet sunt accusantium rerum! At expedita alias excepturi, hic porro quod suscipit inventore, adipisci quos ea recusandae.</p>
                        </div>
                        <div className="bg-slate-100 pl-8  py-4">
                            <p className='flex items-center text-indigo-600'>Cotact us <AiOutlineArrowRight  className='w-5 ml-2'/></p>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-2xl">
                        <div className="p-8">
                            <HiOutlineAcademicCap  className='w-[40px] h-[40px] bg-indigo-600 text-white rounded-lg mt-[-3rem] ' />
                            <h1 className='font-bold text-2xl my-6'>Sales</h1>
                            <p className='text-xl text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab ad iure dolorum magni
                                eveniet sunt accusantium rerum! At expedita alias excepturi, hic porro quod suscipit inventore, adipisci quos ea recusandae.</p>
                        </div>
                        <div className="bg-slate-100 pl-8  py-4">
                            <p className='flex items-center text-indigo-600'>Cotact us <AiOutlineArrowRight  className='w-5 ml-2'/></p>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-2xl">
                        <div className="p-8">
                            <TbWorld className='w-[40px] h-[40px]  bg-indigo-600 text-white rounded-lg mt-[-3rem] ' />
                            <h1 className='font-bold text-2xl my-6'>Sales</h1>
                            <p className='text-xl text-gray-600'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab ad iure dolorum magni
                                eveniet sunt accusantium rerum! At expedita alias excepturi, hic porro quod suscipit inventore, adipisci quos ea recusandae.</p>
                        </div>
                        <div className="bg-slate-100 pl-8  py-4">
                            <p className='flex items-center text-indigo-600'>Cotact us <AiOutlineArrowRight  className='w-5 ml-2'/></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Support
