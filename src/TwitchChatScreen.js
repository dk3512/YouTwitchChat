import React, { Component } from 'react';
import './App.css';
import { MdSearch } from 'react-icons/md';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { theme } from './Theme.js'

function getTwitchLink(url) {
    var user = url.substring(url.indexOf("twitch.tv/") + 10, url.length);
    return "https://www.twitch.tv/embed/" + user + "/chat";
}

class TwitchChatScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showSearchIcon: false,
            openDialog: false,
            showSearchError: false,
            twitchLinkValue: '',
            twitchLink: 'https://www.twitch.tv/embed/09873098475/chat'
        }
    }

    //when search icon is clicked
    search = () => {
        this.setState({openDialog: true});
    }

    handleClose = () => {
        this.setState({ openDialog: false });
    };

    handleTwitchChange = (e) => {
        this.setState({twitchLinkValue: e.target.value});
    };

    searchLinks = () => {
        var twitchEmbedLink = getTwitchLink(this.state.twitchLinkValue);

        this.setState({twitchLink: twitchEmbedLink});

        this.setState({openDialog: false});
    }

    handleSearchErrorClose = () => {
        this.setState({showSearchError: false});
    }

    render() {

        return (
            <div className="TwitchChatScreen">
                <div className="Options">
                    <MdSearch className="TwitchSearch" onClick={this.search} size={30} color="black"/>
                    <MuiThemeProvider theme={theme}>
                        <Dialog
                        open={this.state.openDialog}
                        onClose={this.handleClose}
                        aria-labelledby="form-dialog-title"
                        >
                            <DialogTitle id="form-dialog-title">Enter Twitch Link</DialogTitle>
                            <DialogContent>
                                <TextField
                                margin="dense"
                                id="twitchLink"
                                label="Twitch Link"
                                fullWidth
                                onChange={this.handleTwitchChange}
                                value={this.state.twitchLinkValue}
                                />
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={this.handleClose} color="primary">
                                Cancel
                                </Button>
                                <Button onClick={this.searchLinks} color="primary">
                                Search
                                </Button>
                            </DialogActions>
                        </Dialog>
                        <Dialog
                        open={this.state.showSearchError}
                        onClose={this.handleSearchErrorClose}
                        aria-labelledby="form-dialog-title"
                        >
                            <DialogTitle id="form-dialog-title">Enter Valid YouTube/Twitch Links</DialogTitle>
                            <DialogActions>
                                <Button onClick={this.handleSearchErrorClose} color="primary">
                                Close
                                </Button>
                            </DialogActions>
                        </Dialog>
                    </MuiThemeProvider>
                </div>
                <iframe title="Twitch Chat"
                        frameBorder="0"
                        scrolling="yes"
                        id="chat_embed"
                        src={this.state.twitchLink}
                        // src="https://www.twitch.tv/embed/c9sneaky/chat"
                        height="100%"
                        width="100%"
                        >
                </iframe>
            </div>
        );
    }
}
export default TwitchChatScreen;