import './App.css';


import { overrideThemeVariables } from 'ui-neumorphism'
import 'ui-neumorphism/dist/index.css'

import React, { FC, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routing/Routes';




const App: FC = () => {

  useEffect(() => {
    overrideThemeVariables({
      '--light-bg': '#E9B7B9',
      '--light-bg-dark-shadow': '#ba9294',
      '--light-bg-light-shadow': '#ffdcde',
      '--dark-bg': '#292E35',
      '--dark-bg-dark-shadow': '#21252a',
      '--dark-bg-light-shadow': '#313740',
      '--primary': '#8672FB',
      '--primary-dark': '#4526f9',
      '--primary-light': '#c7befd'
    });
  })

  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}
export { App };
function componentDidMount() {
  throw new Error('Function not implemented.');
}

