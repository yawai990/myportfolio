import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Navbar, About, Experience, Home, Projects, Skills, Contact } from './components';
import Model from './components/Model/Model';
import { Global, Wrapper, Section } from './GlobalStyle';

//design link = https://preview.colorlib.com/#jackson

const theme = {
    header: '22px',
    text: '16px',
    color: '#F7F7F7',
    bg: 'rgba(34,34,34,0.7)',
    headColor: '#fdfdfd',
    mainBG: '#F7F7F7',
    navBG: '#FFB72B',
    cardBG: '#B5FE83'
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