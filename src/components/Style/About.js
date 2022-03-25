import Styled from 'styled-components';
import { Container } from "../../GlobalStyle";

export const Page = Styled(Container)`
    min-height:100vh;
    background-color: #ffffff;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    background:linear-gradient(90deg,#373B44,#4286f4);
    border-top-right-radius: 15%;
    border-bottom-right-radius: 15%;

    @media screen and (max-width:500px){
        flex-direction:column;
        border-bottom-left-radius: 20%;
        border-bottom-right-radius: 0%;
    }
`

export const Profile = Styled.div`
    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }

    @media screen and (max-width:500px){
        height:50vh;
        width:100%;
    }
`

export const CardAbout = Styled.div`
    width:70%;
    height:${({ height }) => height || 10}rem;
    text-align:justify;
    color:white;
    font-size:18px;
    font-weight:100;
    p{
        padding:0.5rem;
    }
`