import React from 'react'
import styled from 'styled-components'
import {MdClose} from 'react-icons/md'

const Background = styled.div `
width: 100%;
height: 100%;
background: rgba(0, 0, 0, 0.8);
position: fixed;
display: flex;
justify-content: center;
align-items: center;
`

const ModalWrapper = styled.div `
width: 500px;
height: 300px;
box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
background: #fff;
color: #000;
display: grid;
grid-template-columns: 1fr 1fr;
position: relative;
z-index: 10;
border-radius: 10px;
`

const ModalImg = styled.img `
width: 120%;
height: 100%;
border-radius: 10px 0 0 10px;
background: #000;
`
const ModalContent = styled.div `
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
line-height: 1.8;
color: #141414;

p {
    margin-bottom:
}

button {
    padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
}
`;

const CloseModalButton = styled(MdClose)`
cursor: pointer;
position: absolute;
top: 20px;
right: 20px;
width: 32px;
height: 32px;
padding: 0;
z-index: 10;
`;
export const Modal = ({ showModal, setShowModal }) => {
    return (
    <>
    { showModal ? (
        <Background>
            <ModalWrapper showModal = {showModal}>
                <ModalImg src= {require('../components/3.png')} 
                alt='camera' />
                <ModalContent>
                    <h1> DeWhales</h1>
                    <button>Mint Another</button>
                </ModalContent>
                <CloseModalButton aria-label='Close modal' onClick={() => setShowModal (prev => !prev)} />
            </ModalWrapper>
        </Background>
    ) : null }
    </>
    );
};