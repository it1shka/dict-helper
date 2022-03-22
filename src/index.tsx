import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { createGlobalStyle } from 'styled-components'
import { Provider } from 'react-redux'
import store from './store'

const GlobalStyle = createGlobalStyle`
  :root {
    --font-color: #262626;
    --shadow-color: #ccc;

    --primary-color: #4186bf;
    --primary-dark-color: #2f618a;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    color: var(--font-color);
    font-size: calc(1vw + 0.6em);
    @media screen and (min-width: 50em) {
      font-size: 1.1em;
    }
  }

`

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById('root')
);