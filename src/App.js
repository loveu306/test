import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';

const createGlobalStyle = createGlobalStyle`
    body {
        background: #e9ecef;
    }
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <TodoTemplate>hello</TodoTemplate>
        </>
    );
}

export default App;