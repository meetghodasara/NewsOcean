import './App.css';
import Navbar from './components/Navbar';

import React, { Component } from 'react'
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar/>
        <News/>
      </>
    )
  }
}
//089963b7961d49a38fab22bba3aa864f