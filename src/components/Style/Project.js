import Styled from 'styled-components';
import { ThemeConsumer } from 'styled-components';

export const PjtCard = Styled.div`
    width:${({ width }) => width || 15}rem;
    height:${({ height }) => height || 10}rem;
    background-color:${props => props.bg || props.theme.color};
    margin:${({ m }) => m || 0}rem;
    padding:${({ px, py }) => `${py || 0}px ${px || 0}px`} ;
    display:${({ flex }) => flex && flex};
    justify-content:${({ justify }) => justify && justify};
    align-items:${({ align }) => align && align};
    flex-direction:${({ fd }) => fd && fd};
    flex-wrap:wrap;
    box-shadow:0 0 10px #283739;
    border-radius:15px;
    color:${props => props.text || props.theme.bg};
    overflow:hidden;
    
    @media screen and (max-width:768px){
        width:350px;
        height:400px;
    }
`

export const PjtImg = Styled.div`
    width:${({ width }) => width || '100'}%;
    height:${({ height }) => height || '100'}%;
    position:relative;
    cursor:pointer;

    img{
        width:100%;
        height:100%;
        object-fit:cover;
    }
    div{
        width:100%;
        height:100%;
        position:absolute;
        border-radius:50%;
        top:0;
        left:0;
        background:#545553e5;
        display:flex;
        justify-content:space-around;
        align-items:center;
        transform:scale(0);
        a{  
            width:30px;
            height:30px;
            text-decoration:none;
            color:rgb(245,250,245);
            font-size:1.2rem;
            background:#312F44;
            border-radius:50%;
            display:flex;
            justify-content:center;
            align-items:center;
            &:hover{
                color:#312F44;
                background:white;
            }
        }
    }
    &:hover div{
        transform:scale(1);
        border-radius:0;
        transition:all 0.4s ease;
    }
`
export const PjtBody = Styled.div`
    padding:${({ py }) => py || 0}rem ${({ px }) => px || 0}rem;
`