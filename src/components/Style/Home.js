import Styled from 'styled-components';

export const BgImg = Styled.img`
    width:100%;
    height:100%;
    position:absolute;
    z-index:-1;
    object-fit:cover;
`;

export const Text = Styled.h1`
    font-size:${({ fs }) => fs || '16'}px;
    font-weight:${({ fw }) => fw && fw};
    color:${({ text }) => text || 'black'};
`
// export const Intro = Styled.