import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { Container, SubContainer, Button } from "../../GlobalStyle";
import { PjtCard, PjtImg, PjtBody } from "../Style/Project";
import { data } from './Data';

const Projects = () => {
    const [cat, setCat] = useState('all');
    const [animateCard, setAnimateCard] = useState({ y: 0, scale: 1, opacity: 1 });
    const [filterPjt, setFilterPjt] = useState(data);

    const filter = (category) => {
        setCat(category)
        setAnimateCard({ y: 100, scale: 0, opacity: 0 })

        setTimeout(() => {
            setAnimateCard({ y: 0, opacity: 1 })
            if (category === 'all') {
                setFilterPjt(data)
            } else {

                setFilterPjt(data.filter(pjt => pjt.cat === category));
                setCat(category)
            }
        }, 600);
    }
    return (
        <Container id='project'>
            <h1>My Work</h1>

            <SubContainer flex='flex' justify='center' align='center'>
                {['all', 'javascript', 'react', 'mern', 'mysql'].map((btn, id) => {
                    return <Button key={id}
                        mx='1' my='1'
                        text={`${btn === cat ? '#F6C065' : 'black'}`}
                        bg={`${btn === cat && '#09015F'}`}
                        onClick={() => filter(btn)}>
                        {btn}
                    </Button>
                })}
            </SubContainer>

            <SubContainer flex='flex' justify='center' align='flex-start' py='2'>
                {filterPjt.map((pjt, ind) => {
                    return <motion.div key={ind} animate={animateCard}>
                        <PjtCard width='15' height='20' m='2' bg='white'>
                            <PjtImg width='100' height='60'>
                                <img src={pjt.imgURL} alt="" />

                                <div>
                                    <a href={pjt.link} target='_blank'>
                                        <AiFillEye />
                                    </a>
                                    <a href={pjt.code} target='_blank'>
                                        <AiFillGithub />
                                    </a>
                                </div>
                            </PjtImg>

                            <PjtBody px='1' py='0.5'>
                                <h5>{pjt.title}</h5>

                                <p>{pjt.description}</p>
                            </PjtBody>
                        </PjtCard>
                    </motion.div>
                })}
            </SubContainer>
        </Container>
    )
}
export default Projects;