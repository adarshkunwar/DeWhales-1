import React, {useState} from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../components/globalStyle';
import { Modal } from '../components/Modal';


const Container = styled.div`
display: flex;
flex-wrap:wrap;
justify-content:center;
align-items: center;

height: 80vh;
`
const Button = styled.button`
min-width: 100px;
padding:16px 32px;
border-radius: 4px;
border: none;
background: #141414;
color: #fff;
font-size: 24px;
cursor: pointer;
`;

export const Gallery = () => {
  const[showModal, setShowModal] = useState (false)

  const openModal = () => {
    setShowModal(prev => !prev);
  }
  return (
   <>
   <Container>
    <Button onClick={openModal}>I'm a modal</Button>
    <Modal showModal={showModal} setShowModal = {setShowModal} />
    <GlobalStyle />
   </Container>
  
   
   
   </>
  )
}
