import React from 'react'
import { CONTACT } from '../constants'
import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <div className='border-b border-neutral-900 pb-4 '>
            <h1 className='my-10 text-center text-4xl'>Get in Touch</h1>
            <div className="text-center tracking-tighter">
                <p className='my-4'>147,Naya Ganj,Ghaziabad</p>
                <p className='my-4'>{CONTACT.phoneNo}</p>
                <a className='mb-4 underline' href="#">{CONTACT.email}</a>
            </div>
        </div>
    )
}

export default Contact
