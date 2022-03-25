import React from "react";
import { motion } from "framer-motion";
import { image } from '../constants';
import { FaBars } from 'react-icons/fa';
import { HeroContainer, SubHeroContainer, Hamburger, Text, Hero, Pic } from '../Style/Home';
import { AppWrap } from "../../HOC";
import { useGlobalContext } from "../Context/Context";

const Home = () => {
  const txt = 'I am Yawai Aung';
  const textArr = txt.split('');
  const { PlayModel, setModel } = useGlobalContext();

  return <HeroContainer flex='flex'>

    <Hamburger onClick={PlayModel}>
      <FaBars />
    </Hamburger>

    <Hero>
      <motion.div>

        <motion.h5 style={{ margin: 0, fontSize: '2rem' }}>Hello! Welcome To My Portfolio</motion.h5>
      </motion.div>

      <h5 style={{ margin: 0, fontSize: '2.4rem' }}>
        <span>I'm </span>
        <span>Yawai Aung</span>
      </h5>

      <p>Front End Developer</p>

    </Hero>


    <SubHeroContainer>

      <div className="img">
        <img src={image.programmer} alt="" />
      </div>
    </SubHeroContainer>


  </HeroContainer >
}
export default AppWrap(Home, 'home');