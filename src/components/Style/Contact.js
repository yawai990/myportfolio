import Styled from 'styled-components';

export const Form = Styled.form`
    padding:${({ py }) => py || 1}em ${({ px }) => px || 4}rem;
`

export const FormControl = Styled.div`
    width:300px;
    background-color:${props => props.bg || props.theme.bg};
    margin:${({ my }) => my || 1}em ${({ mx }) => mx || 0}rem;
    padding:${({ py }) => py || 0.2}em ${({ px }) => px || 0.5}rem;
    opacity:0.8;
    input{
        width:100%;
        height:30px;
        border:none;
        outline:none;
        background:transparent;
        appearance:none;
        -webkit-appearance: none;
        color:${props => 'white' || props.theme.color};
        font-size:16px;
        &::placeholder{
            color:${props => props.theme.color};
        }
}`
export const FormMessage = Styled.textarea`
        width:300px;
        height:120px;
        border:none;
        background-color:${props => props.bg || props.theme.bg};
        opacity:0.8;
        margin:${({ my }) => my || 1}em ${({ mx }) => mx || 0}rem;
        padding:${({ py }) => py || 0.7}em ${({ px }) => px || 0.5}rem;
        outline:none;
        color:${props => 'white' || props.theme.color};
        font-size:16px;
        display:block;

        &::placeholder{
            font-size:16px;
            color:${props => props.theme.color};
            font-family: 'Noto Sans', sans-serif;
}`;
export const Connect = Styled.div`
    height:${({ height }) => height || '20'}rem;
    display:${({ flex }) => flex || ''};
    justify-content:${({ justify }) => justify || ''};
    align-items:${({ align }) => align || ''};
    flex-direction:${({ fd }) => fd || ''};
    flex-wrap:wrap;
    margin:${({ my, mx }) => `${my || 0.5}rem ${mx || 0}rem`};
    padding:${({ px, py }) => `${py || 5}px ${px || 10}px`} ;
`
export const ContactMe = Styled.a`
    width:100%;
    height:${({ height }) => height || '5'}rem;
    text-decoration:none;
    display:flex;
    align-items:center;
    margin:${({ my, mx }) => `${my || 1}rem ${mx || 0}rem`};
    padding:${({ px, py }) => `${py || 5}px ${px || 10}px`} ;

    p{  
        font-size:20px;
        color:${props => props.text || props.theme.bg};
        margin:${({ my, mx }) => `${my || 0.5}rem ${mx || 0}rem`};
    }
`

export const ContactIMG = Styled.div`
    width:90px;
    height:90px;
    background-color:${props => props.bg || props.theme.bg};
    filter: opacity(0.7);
    border-radius:5px;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:${({ my, mx }) => `${my || 0}rem ${mx || 0.5}rem`};
    img{
        width:80%;
        height:80%;
        object-fit:cover;
    }
`