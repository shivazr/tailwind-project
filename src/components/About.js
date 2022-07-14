import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full my-32'>
            <div className="max-w-[1024px] mx-auto">
                <div className="text-center">
                    <h2 className='text-5xl font-bold'>Trusted by developers across the world</h2>
                    <p className='text-3xl py-6 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, autem accusantium
                        laudantium ullam tempore rerum nihil earum suscipit iste nulla beatae at numquam nobis consequatur ea facere amet recusandae quod!</p>
                </div>
            
            <div className="grid md:grid-cols-3 gap-1 px-2 text-center">
                <div className="border py-8 rounded-xl shadow-xl">
                    <p className='text-6xl font-bold text-indigo-600'>100%</p>
                    <p className='mt-2 text-gray-400'>Copletion</p>
                </div>
                <div className="border py-8 rounded-xl shadow-xl">
                    <p className='text-6xl font-bold text-indigo-600'>24/7</p>
                    <p className='mt-2 text-gray-400'>Copletion</p>
                </div>
                <div className="border py-8 rounded-xl shadow-xl">
                    <p className='text-6xl font-bold text-indigo-600'>100k</p>
                    <p className='mt-2 text-gray-400'>Copletion</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default About
