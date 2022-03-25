import React from "react";
import { Container, Header } from '../../GlobalStyle';
import { Circle, Card, CardContainer, SbContainer } from "../Style/Experience";
import { FaPencilAlt } from 'react-icons/fa';
import { Data } from './Data';
import { AppWrap } from "../../HOC";

const Experience = () => {
    return (
        <Container>
            <Header fs='20' mx='1' text={props => props.theme.bg}>Experience</Header>

            <Header text={props => props.theme.bg} fs='23' my='1' mx='1.4'>Work Experience</Header>

            <CardContainer px='2'>

                {Data.map((d, ind) => {
                    return <SbContainer key={d.id} flex='flex' justify='center' my='0.2' py='1.3' px='1.3'>

                        <Circle size='2.5' bg={`${ind % 2 === 0 ? '#FF6B6B' : '#FFD93D'}`}>
                            <FaPencilAlt size='20' />
                        </Circle>

                        <Card width='70' py='1' px='2' mx='2'>
                            <h3>{d.position}</h3>
                            <p>{d.company}</p>
                            <p>{d.year}</p>
                            <p>{d.desc}</p>
                        </Card>
                    </SbContainer>
                })}

            </CardContainer>
        </Container>

    )
}
export default AppWrap(Experience, 'experience');