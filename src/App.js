import React from 'react';
import './App.css';

//components
import PostDestination from './Components/PostDestination'

class App extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
  return (
    <div className="App">
      <h1>Travel Site</h1>
      <PostDestination />
    </div>
  );
  }
}

export default App;
