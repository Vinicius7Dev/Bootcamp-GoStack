import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

import singInBG from '../../assets/sign-in-background.png';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    place-content: center;
    width: 100%;
    max-width: 700px;
`;

const appearFromLeft = keyframes`
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0px);
    }
`;

export const AnimationContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    place-content: center;

    animation: ${appearFromLeft} 1s;

    form {
        margin: 50px 0;
        width: 340px;
        text-align: center;

        h1 {
            margin-bottom: 24px;
        }

        a {
            text-decoration: none;
            color: #F4EDE8;
            display: block;
            margin-top: 24px;
            transition: color 0.2s;

            &:hover {
                color: ${shade(0.2, '#F4EDE8')};
            }
        }
    }

    > a {
        display: flex;
        align-items: center;

        color: #FF9000;
        text-decoration: none;
        margin-top: 20px;
        transition: color 0.2s;

        svg {
            margin-right: 16px;
        }

        &:hover {
            color: ${shade(0.2, '#FF9000')};
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${singInBG}) no-repeat center;
    background-size: cover;
`;