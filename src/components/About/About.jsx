import React from "react";
import { Container, SubContainer } from "../../GlobalStyle";
import { image } from '../constants';
import { Page, Profile, CardAbout } from "../Style/About";
import { AppWrap } from "../../HOC";

const About = () => {
    return (
        <Container>
            <Page flex='flex'>

                <Profile className="img">
                    <img src={image.BgDev} alt="" />
                </Profile>

                <SubContainer flex='flex' justify='center' align='center'>
                    <CardAbout>
                        <h2>About Me</h2>

                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus minus vel eum officiis ea dolor sapiente animi eius similique, ullam, dicta id neque voluptates. Placeat nesciunt a ab, eaque officiis aut dignissimos ullam, hic explicabo mollitia fugiat minima rem culpa quod. Voluptatibus saepe quisquam exercitationem molestias beatae quas porro debitis.</p>
                    </CardAbout>
                </SubContainer>
            </Page>
        </Container>
    )
}
export default AppWrap(About, 'about');