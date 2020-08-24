import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Index from './components/js/Index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Route path='/' component={Index} />
      </div>
    )
  }
}

export default App;
