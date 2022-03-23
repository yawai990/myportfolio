import React from "react";
import { Container, SubContainer, Header } from '../../GlobalStyle';
import { Circle, Card, CardContainer } from "../Style/Experience";
import { FaPencilAlt } from 'react-icons/fa';
import { Data } from './Data';

const Experience = () => {
    return (
        <>
            <Container id='experience'>
                <Header fs='20' mx='1' text='#515E63'>Experience</Header>

                <Header fs='23' my='1' mx='1.4'>Work Experience</Header>

                <CardContainer px='2' bg='red'>

                    {Data.map((d, ind) => {
                        return <SubContainer key={d.id} width='60' flex='flex' justify='space-around' my='0.2' py='1.3' px='1.3'>

                            <Circle size='2.5' mx='1' bg={`${ind % 2 === 0 ? '#FF6B6B' : '#FFD93D'}`}>
                                <FaPencilAlt size='20' />
                            </Circle>

                            <Card width='50' py='1' px='2'>
                                <h3>{d.position}</h3>
                                <p>{d.company}</p>
                                <p>{d.year}</p>
                                <p>{d.desc}</p>
                            </Card>
                        </SubContainer>
                    })}

                </CardContainer>
            </Container>
        </>
    )
}
export default Experience;