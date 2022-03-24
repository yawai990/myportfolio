import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Navbar, About, Experience, Home, Projects, Skills, Contact } from './components';
import { Global, Wrapper } from './GlobalStyle';

//design link = https://preview.colorlib.com/#jackson

const theme = {
    header: '22px',
    text: '16px',
    color: '#D9D7F1',
    bg: '#1A5F7A',
    headColor: '#214151'
};
const App = () => {
    const [navActive, setNavActive] = useState(true);

    const PlayNav = () => setNavActive(!navActive);

    return (
        <ThemeProvider theme={theme}>
            <>
                <Global />
                <Navbar width={`${navActive ? 15 : 5}`} PlayNav={PlayNav} navActive={navActive} />
                <Wrapper width={`${navActive ? 85 : 95}`}>
                    <Home />
                    <Skills />
                    <Experience />
                    <Projects />
                    <About />
                    <Contact />
                </Wrapper>
            </>
        </ThemeProvider>
    )
}

export default App;