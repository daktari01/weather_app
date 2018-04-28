import React, { Component } from 'react';
import Titles from './components/Titles';
import Forms from './components/Forms';

class App extends Component{
  render(){
    return(
      <div>
        <Titles />
        <Forms />
      </div>
    );
  }
}

export default App;