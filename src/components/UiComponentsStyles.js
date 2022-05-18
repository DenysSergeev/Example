import React from 'react';
import styled from "styled-components";

import Input from './Input';

const UiComponentsStyles = () => {
  return (
    <Container>
      <h1>UI components & styles</h1>
      <Form>
        <h3>INPUTS</h3>
        <Input type="email" placeholder=""/>
        <Input type="password" placeholder="Forgot your password?"/>
        <Input type="email" placeholder="anastasi"/>
        <Input type="password" placeholder="Forgot your password?"/>
        <Input type="password" placeholder="anastasi"/>
        <Input type="password" placeholder="Forgot your password?"/>
        <Input type="email" placeholder="anastasia@gmail.com" />
        <h3>BUTTONS</h3>
        <h5>default</h5>
        <button>Sign In</button>
        <h5>hover</h5>
        <button>Sign In</button>
        <h5>active</h5>
        <button>Sign In</button>
        <h5>disabled</h5>
        <button>Sign In</button>
      </Form>
      
      <Links>
        <h3>LINKS</h3>
        <p>default</p>
        <a href="#">Sign up now</a>
        <p>Contact</p>

        <p>hover</p>
        <a href="#">Sign up now</a>
          <p>Contact</p>
          <p>Privacy</p>
          <p>Terms</p>
        <p>Forgot your password?</p>
      </Links>
      <Colors>
        <h3>Buttons</h3>
    
        <h3>Text</h3>
      </Colors>
    </Container>


  )
}

const Container = styled.div`
  background: #E5E5E5;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column;

  h1 {
    position: absolute;
    width: 848px;
  height: 24px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 70px;
  line-height: 24px;
  /* identical to box height, or 34% */

  text-align: center;
  color: #000000;
  }
  
  @media (max-width: 900px) {
    width: 100vw;
    position: absolute;
    padding: 0;
  }
`;

const Form = styled.form`
  width: 100%;
  align-items: center;

  h3 {
    color: #000000;
    margin-top: 5rem;
    margin-bottom: 2rem;
  }

  button {
    height: 54px;
    width: 420px;
    left: 0px;
    top: 0px;
    border-radius: 8px;
    background-color: #065BEA;
    border-radius: 8px;
    flex-direction: row;
    margin: 0.5rem;
    box-shadow: #065BEA;
    color: white;
    font-weight: 600;
    cursor: pointer;

    transition: all 0.2s ease-in;

    :hover {
      background: #0451D2;
      transform: translateY(-3px);
    }

    :active {
      background: #065BEA;
    }

    :disabled {
      background: #C6D0E0;
    }
  }
  h5 {
    height: 28px;
    width: 66px;
    left: -942px;
    top: 425px;
    border-radius: nullpx;

  }
`;

const Links = styled.div`
  padding: 0 1rem;
  text-align: center;
`;

const Colors = styled.div`

`;

export default UiComponentsStyles;