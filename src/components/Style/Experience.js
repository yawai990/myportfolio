import Styled from 'styled-components';
import { Container, SubContainer } from '../../GlobalStyle';

export const CardContainer = Styled(Container)`
       
        position:relative;
        &::before{
            content:'';
            width:5px;
            height:90%;
            background:#b1b1b1;
            position:absolute;
            top:5%;
            left:13%;
            transform:translatex(-50%);
            z-index:-1;
        }

        @media screen and (max-width:768px){
            padding:0.8rem;
            &::before{
                left:4%;
            }
        }
        @media screen and (max-width:500px){
            padding:0;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;                
            
            &::before{
                left:11%;
            }
        }
`
export const SbContainer = Styled(SubContainer)`
        @media screen and (max-width:500px){
            width:90%;
            padding:0;
            margin:10px 0;
        }
`

export const Card = Styled(SubContainer)`
    background:${props => props.bg || props.theme.color};
    color:${props => props.text || props.theme.bg};
    p{
        font-family: 'Noto Sans', sans-serif;
    }
    &::before{
        content:'';
        width:20px;
        height:20px;
        background:${props => props.bg || props.theme.color};
        color:${props => props.text || props.theme.bg};
        position:absolute;
        border-radius:2px;
        top:10px;
        left:-8px;
        z-index:-1;
        transform:rotate(45deg)
    }
    @media screen and (max-width:768px){
        width:80%;
        maring:0 1rem;
        margin-top:0.5rem;
    }
    @media screen and (max-width:500px){
        width:80%;
        h3{
            margin-left:0.8rem;
        }
        p{
            padding:0 0.5rem;
            text-align:justify;
        }
    }
`
export const Circle = Styled.div`
    width:${({ size }) => size || '0'}rem;
    height:${({ size }) => size || '0'}rem;
    border-radius:50%;
    background:${props => props.bg || props.theme.color};
    display:flex;
    justify-content:center;
    align-items:center;
    box-shadow:2px 2px 5px ${props => props.bg || props.theme.bg} inset,
              -2px -2px 5px ${props => props.bg || props.theme.bg} inset;
    margin:${({ my }) => my || 0}rem ${({ mx }) => mx || 0} rem;
    position:relative;
    margin-right:40px;

    &::before{
        content:'';
        width:120%;
        height:120%;
        border-radius:50%;
        background:${props => props.theme.bg};
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%,-50%);
        z-index:-1;
    }

    svg{
        font-size:${({ size }) => size || 0}%;
    }

    @media screen and (max-width:500px){
        margin-right:10px;
    }
`