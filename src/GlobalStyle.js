import Styled, { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap')
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: 'Noto Sans', sans-serif;
}
body{
    width:100vw;
    height:100vh;
    overflow:hidden;
}
#root{
    display:flex;
}`
export const Wrapper = Styled.section`
    width:80vw;
    height:100vh;
    overflow-y:scroll;
    overflow-x:hidden;
    scroll-behavior: smooth;
    @media screen and (max-width:768px){
        width:100%;

    }
`
export const Container = Styled.div`
    width:${({ width }) => width || 100}%;
    min-height:${({ height }) => height || 100}vh;
    display:${({ flex }) => flex && flex};
    justify-content:${({ justify }) => justify && justify};
    align-items:${({ align }) => align && align};
    flex-direction:${({ fd }) => fd && fd};
    margin:${({ m }) => m && m}rem;
    margin-left:${({ ml }) => ml || 0}rem;
    padding:${({ py }) => py || 0}rem ${({ px }) => px || 0}rem;
`;
export const SubContainer = Styled.div`
    width:${({ width }) => width && width}rem;
    height:${({ height }) => height && height}rem;
    background-color:${props => props.bg || 'none'};
    margin:${({ my }) => my || 0}rem ${({ mx }) => mx || 0}rem;
    margin-left:${({ ml }) => ml && ml}rem;
    padding:${({ px, py }) => `${py || 0}rem ${px || 0}rem`} ;
    display:${({ flex }) => flex && flex};
    justify-content:${({ justify }) => justify && justify};
    align-items:${({ align }) => align && align};
    flex-direction:${({ fd }) => fd && fd};
    flex-wrap:wrap;
    position:relative;
    @media screen and (max-width:768px){
        padding:0;
        margin:0 auto;
    }
    @media screen and (max-width:500px){
        
    }
`

export const Header = Styled.h1`
    font-size:${({ fs }) => fs || '22'}px;
    font-weight:${({ fw }) => fw && fw};
    color:${props => props.text || props.theme.headColor};
    margin:${({ my }) => my || 0}rem ${({ mx }) => mx || 0}rem;
`;

export const Button = Styled.button`
    border:none;
    background-color:${props => props.bg || props.theme.bg};
    color:${props => props.text || props.theme.color};
    cursor:pointer;
    text-transform: uppercase;
    padding:${({ px, py }) => `${py || 5}px ${px || 10}px`} ;
    margin:${({ my }) => my || 0}rem ${({ mx }) => mx || 0}rem;
    border-radius:4px;
    letter-spacing:1px;
`