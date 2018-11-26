import React, { Component } from 'react';
import './App.css';

class TwitchChatScreen extends Component {
    render() {
        return (
            <div className="TwitchChatScreen">
                <div className="options">
                    
                </div>
                <iframe title="Twitch Chat"
                        frameBorder="0"
                        scrolling="yes"
                        id="chat_embed"
                        src="https://www.twitch.tv/embed/hebo/chat"
                        // src="https://www.twitch.tv/embed/c9sneaky/chat"
                        height="100%"
                        width="100%">
                </iframe>
            </div>
        );
    }
}

export default TwitchChatScreen;