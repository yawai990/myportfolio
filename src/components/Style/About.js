import Styled from 'styled-components';
import { Container, SubContainer } from "../../GlobalStyle";
import { image } from '../constants';

export const Page = Styled(Container)`
    background-color: #ffffff;
    background-attachment: fixed;
    background-size: cover;
    background-repeat: no-repeat;
    background:linear-gradient(90deg,#373B44,#4286f4);
    border-top-right-radius: 15%;
    border-bottom-right-radius: 15%;
`

export const Profile = Styled.div`
    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
`

export const CardAbout = Styled.div`
    width:80%;
    height:${({ height }) => height || 10}rem;
`