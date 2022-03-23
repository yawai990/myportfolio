import React from "react";
import { motion } from "framer-motion";
import { Container, SubContainer } from "../../GlobalStyle";
import { image } from '../constants';
import { BgImg, Text } from '../Style/Home';

const Home = () => {
    const txt = 'Hi,I am Yawai,Web Developer';
    const textArr = txt.split('');

    return <Container id='home' flex='flex' fd='row-reverse'>
        <BgImg src={image.bgWhite} alt="" />

        {/* <div className="hero">
            <img src={image.profile} alt="" />
        </div> */}

        <Container className="intro" width='100' flex='flex' justify='flex-start' align='center'>

            <SubContainer width='22' height='10' ml='2.5'>
                <Text fs='24' fw='600'>
                    👋 {textArr.map((letter, ind) => {
                        return <motion.span key={ind}
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ delay: ind * 0.09 }}>
                            {letter}</motion.span>
                    })}
                </Text>

                <motion.div style={{ marginTop: '2rem' }} whileInView={{ opacity: [0, 1], y: [50, 0] }}
                    transition={{ duration: 0.8 }}>

                    <Text fs='22' fw='500' text='#555'>Front End Developer</Text>
                </motion.div>
            </SubContainer>

        </Container>

    </Container >
}
export default Home;