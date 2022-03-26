import React from 'react';
import { motion } from 'framer-motion';
import { SocialWrap } from '../Style/Social';
import { Data } from './Data';

export const Social = ({ id }) => {
    return <SocialWrap>

        {Data.map(link => {

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
        })}
    </SocialWrap >
}