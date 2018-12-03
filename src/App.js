import React, { Component } from 'react';
import './App.css';
import YouTubeScreen from './YouTubeScreen';
import TwitchChatScreen from './TwitchChatScreen';

class App extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  render() {
    return (
      <div ref={this.myRef} className="App" id="App">
        <YouTubeScreen/>
        <TwitchChatScreen ref={this.myRef}/>
      </div>
    );
  }
}

export default App;
