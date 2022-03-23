import React from 'react';
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
    return (
        <ThemeProvider theme={theme}>
            <>
                <Global />
                <Navbar />
                <Wrapper>
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