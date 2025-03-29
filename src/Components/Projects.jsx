import React from 'react'
import { PROJECTS } from '../constants/index'
const Projects = () => {
    return (
        <div className='border-b border-neutral-800 pb-4'>
            <h1 className="my-20 text-center text-4xl">Projects</h1>
            <div className="">{PROJECTS.map((project, index) => (
                <div key={index} className='mb-8 flex flex-wrap lg:justify-center'>
                    <div className="w-full lg:w-1/4">
                        <img className='mb-6 rounded' src={project.image} width={150} height={150} alt="" />

                    </div>

                    <div className="w-full max-w-xl lg:w-1/4">
                        <h6 className='mb-2 font-semibold'>{project.title}</h6>
                        <p className='mb-4 text-neutral-400'>{project.description}</p>
                        {project.technologies.map((tech, index) => (
                            <span className='mr-2 rounded px-2 py-1 text-sm bg-neutral-800' key={index}>{tech}</span>
                        ))}
                    </div>
                </div>


            ))}
            </div> 
        </div>
    )
}

export default Projects
