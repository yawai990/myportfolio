import Styled from 'styled-components';

export const ModelContainer = Styled.div`
    width:100%;
    height:100vh;
    position:absolute;
    top:0;
    left:0;
    background:${props => props.theme.bg};
    z-index:5;
    display:none;
    overflow-y:scroll;
    transition:all 0.4s ease-in-out;

    @media screen and (max-width:768px){
        display:block;
    }
`
export const NavHead = Styled.div`
    width:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    margin-top:2rem;
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
export const Copy = Styled.p`
    padding: 10px;
    marginBottom: 2rem;
    text-align: center;
    color:${props => props.theme.color};
`
export const Button = Styled.button`
    width:40px;
    height:40px;
    border-radius:50%;
    background:transparent;
    border:none;
    position:fixed;
    top:25px;
    right:25px;
    cursor:pointer;
    svg{
        width:90%;
        height:90%;
        color:red;
    }
`