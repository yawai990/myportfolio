import Styled from 'styled-components';
import { SubContainer } from "../../GlobalStyle";

export const SkillContainer = Styled(SubContainer)`
    
`
export const Card = Styled.div`
    width:${({ width }) => width && width}rem;
    height:${({ height }) => height && height}rem;
    background-color:${props => props.bg || props.theme.bg};
    border-radius:${({ br }) => br || '10'}px;
    box-shadow:0 0 8px ${({ bs }) => bs || ''};
    color:${props => props.color || props.theme.color};
    display:${({ flex }) => flex && flex};
    justify-content:${({ justify }) => justify && justify};
    align-items:${({ align }) => align && align};
    flex-direction:${({ fd }) => fd && fd};
    padding:${({ p }) => p || 0}em;
    font-family: 'Noto Sans', sans-serif;
    p{
        font-family: 'Noto Sans', sans-serif;

    }
    img{
        width:75%;
        height:75%;
        object-fit:cover;
        object-position:center;
    }
    @media screen and (max-width:768px){
        width:90%;
    }
    @media screen and (max-width:500px){
        width:80%;
        height:fit-content;
        flex-direction:column;
    }
`

export const CardLogo = Styled(Card)`
    border-radius:50%;
    border:${({ border }) => border || 'none'};
    box-shadow:0 0 8px ${({ bs }) => bs || ''};
    border:3px solid ${props => props.theme.bg};

    @media screen and (max-width: 768px){
        width: 3rem;
        height: 3rem;
}
    @media screen and (max-width:500px){
        width:40px;
        height:40px;

}
`

export const Line = Styled.div`
    width:${({ width }) => width && width} rem;
    height:${({ height }) => height && height} rem;
    background - color:${({ bg }) => bg || 'white'};
    margin:${({ my }) => my || 0}rem ${({ mx }) => mx || 0} rem;
`