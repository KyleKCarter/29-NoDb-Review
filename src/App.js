import React from 'react';
import './App.css';

//components
import PostDestination from './Components/PostDestination'
import ViewDestination from './Components/ViewDestination'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      currentView: ''
    }
  }

  render() {
  return (
    <div className="App">
      <h1>Travel Site</h1>
      <nav>
        <button onClick={() => this.setState({currentView: 'post'})}>Post Page</button>
        <button onClick={() => this.setState({currentView: 'destinations'})}>Destinations Page</button>
      </nav>
      {
        this.state.currentView === 'post'
        ?
        <PostDestination />
        :
        this.state.currentView === 'destinations'
        ?
        <ViewDestination />
        :
        null
      }
    </div>
  );
  }
}

export default App;
