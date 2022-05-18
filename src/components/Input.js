import React from 'react';
import styled from 'styled-components';

const Input = ({type, placeholder}) => {
  return (
    <Container>
        <StyledInput
            placeholder={placeholder && placeholder}
            type={type ? type : "text"}
            required
            autocomplete="off"
        />
    </Container>
  );
};

const StyledInput = styled.input`
height: 54px;
width: 420px;
left: 0px;
top: 27px;
border-radius: 8px;
margin: 0.5rem;
background: #FFFFFF;
padding: 0 1rem;
transition: all 0 2s ease-in;


:active {
    border: 1px solid #065BEA;
}
:invalid + & {
    transform: translateY(-3px);
    border: 1px solid #FF4B26;

}
:valid + & {
    border: 1px solid #6FCF97;
}
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;


export default Input