import React from "react";
import { motion } from 'framer-motion';
import { Container, SubContainer, Header } from "../../GlobalStyle";
import { Card, CardLogo, Line } from "../Style/Skills";
import { skillData } from './Data';


const Skills = () => {
    return (
        <Container id='skills' d='flex' justify='center' align='flex-start'>
            <SubContainer>

                <h1>My Skills</h1>

                <p>I create the responsive websites that are easy to use and built with best practices.The main area of my experties is front-end development.</p>
            </SubContainer>

            <SubContainer px='2' my='3'>
                <Header my='2'>What I Capable of ?</Header>

                <SubContainer flex='flex' justify='center'>
                    {skillData.map(skill => {
                        return <motion.div style={{ margin: '10px' }} key={skill.id}
                            whileInView={{ x: [100, 0], opacity: [0, 1] }}
                            transition={{ duration: 0.7, delay: skill.id * 0.2 }}>

                            <Card width='25' height='8' flex='flex' align='center' bs='rgba(34,34,34,0.5)' p='2'>
                                <CardLogo style={{ margin: '10px' }} width='3' height='3' flex='flex' justify='center' align='center'>
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
                </SubContainer>

            </SubContainer>
        </Container >
    )
}
export default Skills;