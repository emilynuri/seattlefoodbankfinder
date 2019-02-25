import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <div class="main-body">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
