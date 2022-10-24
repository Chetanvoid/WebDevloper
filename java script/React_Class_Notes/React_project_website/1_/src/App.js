import React from 'react';

import { Fotter, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import { Cta,Brand, Navbar,Feature } from './components';

import './App.css';

const App = () => (
  <div className="App">
    <div className="gradient__bg">
      <Navbar />
      <Header />
    </div>
    <Brand/>
    <WhatGPT3 />
    <Features />
    <Possibility />
    <Cta/>
    <Blog />
    <Fotter />
  </div>
);

export default App;