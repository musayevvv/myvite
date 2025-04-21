import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height:100vh;
`;

const Button = styled.button`
  background-color: orange;
  color: white;
  padding: 10px 20px;
  border-radius: 45px;
  border: none;
  cursor: pointer;
  width:400px;
  height:140px;
  font-size:30px;

  &:hover {
    background-color: darkorange;
  }
`;

function Home() {
  return (
    <Div>
      <Button primary>Sign Up</Button>
    </Div>
  );
}

export default Home;
