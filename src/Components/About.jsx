import React from 'react';
import aboutImg from '../assets/about.jpg';

const About = () => {
    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h1 className="my-20 text-center text-4xl">About
                <span className='text-neutral-500'> Me</span>
            </h1>
            <div className="flex flex-col lg:flex-row items-center">
                <div className="lg:w-1/2 lg:p-8 flex justify-center">
                    <img className='rounded-2xl' src={aboutImg} alt="About Me" />
                </div>
                <div className="lg:w-1/2 lg:p-8">
                    <p className="lg:text-left my-2 max-w-xl py-6">
                        I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Node.js, Express.js, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;
