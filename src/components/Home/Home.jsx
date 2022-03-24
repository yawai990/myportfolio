import React from "react";
import { motion } from "framer-motion";
import { Container, SubContainer } from "../../GlobalStyle";
import { image } from '../constants';
import { BgImg, Text } from '../Style/Home';

const Home = () => {
    const txt = 'Hi,I am Yawai,Web Developer';
    const textArr = txt.split('');

    return <Container id='home' flex='flex' fd='row-reverse'>

        <h2>Hello React</h2>

    </Container >
}
export default Home;