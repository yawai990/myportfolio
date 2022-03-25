import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Navbar, About, Experience, Home, Projects, Skills, Contact } from './components';
import Model from './components/Model/Model';
import { Global, Wrapper, Section } from './GlobalStyle';

//design link = https://preview.colorlib.com/#jackson

const theme = {
    header: '22px',
    text: '16px',
    color: '#D9D7F1',
    bg: 'rgba(34,34,34,1)',
    headColor: '#fdfdfd'
};

const App = () => {
    const [navActive, setNavActive] = useState(false);

    const PlayNav = () => setNavActive(!navActive);


    return (
        <ThemeProvider theme={theme}>

            <Global />
            <Section>
                <Model />
                <Navbar width={`${navActive ? 15 : 5}`} PlayNav={PlayNav} navActive={navActive} />
                <Wrapper width={`${navActive ? 85 : 95}`}>
                    <Home />
                    <Skills />
                    <Experience />
                    <Projects />
                    <About />
                    <Contact />
                </Wrapper>
            </Section>

        </ThemeProvider>
    )
}

export default App;