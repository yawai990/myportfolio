import React from 'react';
import { Container } from '../GlobalStyle';

import { Social } from '../components/Social/Social';


const AppWrap = (Component, idName) => function HOC() {

    return <Container id={idName} my='0' mx='0'>
        <Social />
        <Component />
    </Container>
}
export default AppWrap;