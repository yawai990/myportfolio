import Styled from 'styled-components';

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
    img{
        width:75%;
        height:75%;
        object-fit:cover;
        object-position:center;
    }
    @media screen and (max-width:768px){
        width:100%;
        border:2px solid red;
    }
    @media screen and (max-width:500px){
        width:450px;
        border:2px solid blue;
    }
`

export const CardLogo = Styled(Card)`
    border-radius:50%;
    border:${({ border }) => border || 'none'};
    box-shadow:0 0 8px ${({ bs }) => bs || ''};
    border:3px solid ${props => props.theme.bg};
    @media screen and(max - width: 768px){
    width: 4rem;
    height: 4rem;
}
`

export const Line = Styled.div`
    width:${({ width }) => width && width} rem;
    height:${({ height }) => height && height} rem;
    background - color:${({ bg }) => bg || 'white'};
    margin:${({ my }) => my || 0}rem ${({ mx }) => mx || 0} rem;
`