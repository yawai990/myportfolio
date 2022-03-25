import Styled from 'styled-components';
import { Button } from '../../GlobalStyle';

export const Nav = Styled.nav`
    width:${({ width }) => width || 20}%;
    height:${({ height }) => height || 100}vh;
    background-color:${props => props.theme.bg};
    padding:${({ px, py }) => `${py || 0}rem ${px || 0}rem`} ;
    position:sticky;
    top:0;
    left:0;
    transition:all 0.3s ease;

    @media screen and (max-width:768px){
        display:none;
    }`
export const NavHead = Styled.div`
    width:100%;
    display:${({ active }) => active ? 'flex' : 'none'};
    justify-content:center;
    align-items:center;
    flex-direction:column;
`
export const Thumbnail = Styled.div`
    width:120px;
    height:120px;
    border-radius:50%;
    border:3px solid rgba(34,34,34,0.6);
    display:flex;
    justify-content:center;
    align-items:center;
    overflow:hidden;

    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
`

export const Group = Styled.div`
    display:flex;
    justify-content:center;
    align-items:flex-start;
    flex-direction:column;
    padding:${({ px, py }) => `${py || 0}rem ${px || 0}rem`} ;
    margin:${({ my, mx }) => `${my || 2}rem ${mx || 0}rem `};
`
export const Link = Styled.a`
    display:block;
    text-decoration:none;
    color:${props => props.text || props.theme.color};
    padding:${({ px, py }) => `${py || 5}px ${px || 10}px`} ;
    margin:${({ my, mx }) => `${my || 0}rem ${mx || 0}rem `};
    text-transform: capitalize;
`

export const Icon = Styled.span`
    padding:${({ px, py }) => `${py || 0}px ${px || 0}px`} ;
    margin:${({ my, mx }) => `${my || 0}rem ${mx || 0.5}rem `};
    font-size:2rem;
`

export const Btn = Styled(Button)`
    width:${({ width }) => width || 30}px;
    height:${({ height }) => height || 30}px;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    svg{
        width:80%;
        height:80%;
    }
`