import Styled from 'styled-components';

export const Nav = Styled.nav`
    width:${({ width }) => width || 20}vw;
    height:${({ height }) => height || 100}vh;
    background-color:${({ bg }) => bg || 'rgba(34,34,34,1)'};
    position:sticky;
    top:0;
    left:0;

    @media screen and (max-width:768px){
        display:none;
    }
`