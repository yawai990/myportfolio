import React from "react";
import { motion } from 'framer-motion';
import { Container, SubContainer, Header } from "../../GlobalStyle";
import { Card, CardLogo, SkillContainer } from "../Style/Skills";
import { skillData } from './Data';
import { AppWrap } from "../../HOC";

const Skills = () => {
    return (
        <Container d='flex' justify='center' align='flex-start'>
            <SubContainer px='1'>

                <Header fs='27' my='1' mx='1'>My Skills</Header>

                <motion.p style={{ width: '80%', margin: 'auto', fontSize: '17px' }}
                    whileInView={{ opacity: [0, 1] }}>
                    I create the responsive websites that are easy to use and built with best practices.The main area of my experties is front-end development.</motion.p>
            </SubContainer>

            <SubContainer px='2' my='3'>
                <Header my='2' mx='2'>What I Capable of ?</Header>

                <SkillContainer flex='flex' justify='center'>
                    {skillData.map(skill => {
                        return <motion.div style={{ margin: '10px' }} key={skill.id}
                            whileInView={{ x: [100, 0], opacity: [0, 1] }}
                            transition={{ duration: 0.7, delay: 0.2 }}>

                            <Card width='20' height='8' flex='flex' align='center' bs='rgba(34,34,34,0.5)' p='2'>
                                <CardLogo style={{ margin: '10px' }} flex='flex' justify='center' align='center'>
                                    <img src={skill.img} alt="skill-image" />
                                </CardLogo>

                                <div style={{ margin: '10px' }} className="card-body">
                                    <p className="card-text">
                                        {skill.text}
                                    </p>
                                </div>
                            </Card>
                        </motion.div>
                    })}
                </SkillContainer>

            </SubContainer>
        </Container >
    )
}
export default AppWrap(Skills, 'skills');