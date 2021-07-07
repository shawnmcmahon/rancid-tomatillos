import React from 'react';
import './App.css';

class App extends React.Component {
  constructor()  {
    super()
      this.state = {
        movies: []
      }
  }


  render() {
    return (
      <div className="App">
        <h2>Hello World!</h2>
      </div>
    );

  }
}

export default App;
