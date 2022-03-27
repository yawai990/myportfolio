import React from "react";
import { motion } from "framer-motion";
import { image } from '../constants';
import { FaBars } from 'react-icons/fa';
import { HeroContainer, SubHeroContainer, Hamburger, Text, Hero, Pic } from '../Style/Home';
import { AppWrap } from "../../HOC";
import { useGlobalContext } from "../Context/Context";

const Home = () => {
  const txt = 'Hello! Welcome To My Portfolio';
  const textArr = txt.split('');
  const { PlayModel, setModel } = useGlobalContext();

  return <HeroContainer flex='flex' my='0'>

    <Hamburger onClick={PlayModel}>
      <FaBars />
    </Hamburger>

    <Hero>
      <motion.div whileInView={{ y: [-100, 0], opacity: [0, 1] }}>

        <motion.h5 className="greeting" style={{ margin: 0, fontSize: '2rem' }} whileInView={{ opacity: [0, 1] }}>

          Hello! Welcome To My Portfolio

        </motion.h5>
      </motion.div>
      <motion.div whileInView={{ y: [40, 0], opacity: [0, 1] }} transition={{ delay: 1 }}>
        <h5 style={{ margin: 0, fontSize: '2.4rem' }}>
          <span>I'm </span>
          <span>Yawai Aung</span>
        </h5>
      </motion.div>
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