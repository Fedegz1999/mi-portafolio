import React, { FormEvent, Fragment, useState } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import Navbarr from '././components/Navbar/Navbar';
import Divisor from './components/Divisor/Divisor';
import Avatar from './components/Avatar/Avatar';
import Foto from './components/Media/otro2.png'
import Animacion from './components/Animacion/Animacion';
import Tecnologias from './components/Tecnologias/Tecnologias';

function App(): JSX.Element {


  return (
    <div>
      <Navbarr/>
      <Divisor/>   
      <div className='frase'>
      <h1 className='nombre'>Front-end Developer & Digital Designer</h1>
      <h4 className='fed'>Me gusta crear, diseñar y aprender todos los días</h4>
      <Avatar/>
      </div>
      <Animacion/>
    </div>
      
  );
}

export default App;
