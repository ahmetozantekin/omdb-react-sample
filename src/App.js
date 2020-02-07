import React, { Component } from 'react';
import Infos from './Components/Infos';
import Duotone from './Components/Duotone';

import './App.css';

class App extends Component {


  state = {
    search : ''
  }

  searchText = (e) => {
    this.setState({search: e.target.value});
  }

  render() {
    
    return (
      <div className="sdx">
        <Duotone></Duotone>
        <input onChange={this.searchText} value={this.state.search} type="text" placeholder="Enter a movie name" />
        <Infos movieName={this.state.search}></Infos>
      </div>
    )
  }
}

export default App;