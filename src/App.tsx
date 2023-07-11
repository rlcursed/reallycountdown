import React from 'react';
import CountDownContainer from './Components/CountDownContainer';
import styled from 'styled-components';

const GlobalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
`

function App() {
  return (
    <GlobalContainer>
        <CountDownContainer />
    </GlobalContainer>
  );
}

export default App;
