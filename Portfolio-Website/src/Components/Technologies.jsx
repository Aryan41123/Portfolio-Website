import React from 'react'
import { FaReact, FaNodeJs } from 'react-icons/fa'; // React and Node.js icons
import { SiExpress, SiMongodb } from 'react-icons/si'; // Express and MongoDB icons
const Technologies = () => {
    return (
        <div className='border-b pb-24 border-neutral-700'>
            <h1 className='my-20 text-center text-4xl'>Technologies</h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-700 p-4">
                    <FaReact className='text-7xl text-cyan-600'/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-700 p-4">
                    <FaNodeJs className='text-7xl text-green-600'/>
                </div>  
                 <div className="rounded-2xl border-4 border-neutral-700 p-4">
                    <SiExpress className='text-7xl text-green-400'/>
                </div> 
                  <div className="rounded-2xl border-4 border-neutral-700 p-4">
                    <SiMongodb className='text-7xl text-green-500'/>
                </div>  
                


            </div>
        </div>
    )
}

export default Technologies
 