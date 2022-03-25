import React from "react";
import { motion } from "framer-motion";
import { image } from '../constants';
import { HeroContainer, SubHeroContainer,Text, Hero, Pic } from '../Style/Home';
import { AppWrap } from "../../HOC";

const Home = () => {
  const txt = 'I am Yawai Aung';
  const textArr = txt.split('');

  return <HeroContainer flex='flex'>


    <Hero>

      <div style={{ padding: '10px 15px' }}>

        <motion.h5 style={{ margin: 0, fontSize: '2.5rem' }}>Hello! Welcome To My Portfolio</motion.h5>

        <h5 style={{ margin: 0, fontSize: '2.4rem' }}>
          {textArr.map((text, ind) => {
            return <motion.span key={ind} whileInView={{ x: [10, 0] }} whileHover={{ color: 'red' }}>
              {text}
            </motion.span>
          })}
        </h5>

        <p>Front End Developer</p>


      </div>

    </Hero>


    <SubHeroContainer>

      <div className="img">
        <img src={image.profile} alt="" />
      </div>
    </SubHeroContainer>


  </HeroContainer >
}
export default AppWrap(Home, 'home');