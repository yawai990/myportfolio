import React from 'react';
import { motion } from 'framer-motion';
import { SocialWrap } from '../Style/Social';
import { Data } from './Data';
import { TiArrowDownOutline, TiArrowUpOutline } from 'react-icons/ti';

export const Social = ({ id }) => {
    return <SocialWrap>

        <motion.a href={`#${id === 'home' && 'contact' ||
            id === 'skills' && 'home' ||
            id === 'experience' && 'skills' ||
            id === 'project' && 'experience' ||
            id === 'about' && 'project' ||
            id === 'contact' && 'about'}`}
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '1.5rem',
                color: '#3A3845',
                background: '#FF6B6B'
            }}
            animate={{
                y: [0, -15]
            }}
            transition={{
                transition: 0.3,
                repeat: Infinity,
                repeatDelay: 0.2
            }} className='social-div' >


            <TiArrowUpOutline />
        </motion.a>

        {
            Data.map(link => {

                return <motion.a className='social-div'
                    href={link.link} key={link.id}
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    whileHover={{
                        scale: 1.2,
                        backgroundColor: '#F56D91'
                    }}
                    transition={{ type: "spring", velocity: 10 }}
                >
                    {link.icon}
                </motion.a>
            })
        }

        <motion.a href={`#${id === 'home' && 'skills' ||
            id === 'skills' && 'experience' ||
            id === 'experience' && 'project' ||
            id === 'project' && 'about' ||
            id === 'about' && 'contact' ||
            id === 'contact' && 'home'}`}
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '1.5rem',
                color: '#3A3845',
                background: '#FF6B6B'
            }}
            animate={{
                y: [0, 15]
            }}
            transition={{
                transition: 0.3,
                repeat: Infinity,
                repeatDelay: 0.2
            }} className='social-div'>

            <TiArrowDownOutline />

        </motion.a>
    </SocialWrap >
}