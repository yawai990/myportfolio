import Styled from 'styled-components';
import { Container, SubContainer } from '../../GlobalStyle';

export const HeroContainer = Styled(Container)`
    overflow:hidden;
    @media screen and (max-width:500px){
        flex-direction:column;
    }
`
export const SubHeroContainer = Styled(SubContainer)`
    @media screen and (max-width:768px){
        width:100%;
        height:100%;
        position:absolute;
        top:0;
        left:0;
        z-index:-1;

        div{
            width:100%;
        }
    }
`
export const Hero = Styled.div`
    width:50%;
    height:100vh;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-directioin:column; 

    @media screen and (max-width:768px){
        width:100%;
    }
`

export const Text = Styled.h1`
    font-size:${({ fs }) => fs || '16'}px;
    font-weight:${({ fw }) => fw && fw};
    color:${({ text }) => text || 'black'};
`;

export const Pic = Styled.div`
    width:80%;
    height:80%;
    position:absolute;
    bottom:0;
    left:50%;
    transform:translateX(-50%);
    background:cyan;
    border:1px solid black;

    img{
        width:60%;
        height:60%;
        object-fit:cover;
    }
`
// export const Intro = Styled.