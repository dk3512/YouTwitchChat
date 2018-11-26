import React, { Component } from 'react';
import YouTube from 'react-youtube';
import { MdSearch } from 'react-icons/md';
import 'typeface-roboto';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
// import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
    },
    palette: {
        primary: {
            main: '#2196F2'
        },
        secondary: {
            main: '#2196F2'
        }
    }
});

function getYoutubeId(url) {
    var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[2].length === 11) {
        return match[2];
    } else {
        return "error";
    }
}
//TODO delete twitch stuff in this file
function getTwitchLink(url) {
    var user = url.substring(url.indexOf("twitch.tv/") + 10, url.length);
    return "https://www.twitch.tv/embed/" + user + "/chat";
}

// function TwitchChatScreen(props) {
//     return (
//         <div className="TwitchChatScreen">
//             <iframe title="Twitch Chat"
//                     frameBorder="0"
//                     scrolling="yes"
//                     id="chat_embed"
//                     src="https://www.twitch.tv/embed/hebo/chat"
//                     // src="https://www.twitch.tv/embed/c9sneaky/chat"
//                     height="100%"
//                     width="100%">
//             </iframe>
//         </div>
//     );
// }

class YouTubeScreen extends Component {
    constructor(props) {
        super(props);
        //LinkValue os for the dialog value
        //Link is for the current link
        this.state = {
            showSearchIcon: false, 
            openDialog: false, 
            showSearchError: false,
            youtubeLinkValue: '', 
            twitchLinkValue: '',
            youtubeLink: '',
            twitchLink: 'https://www.twitch.tv/embed/hebo/chat',
            youtubeId: ''
        };
    }

    onHover = () => {
        this.setState({showSearchIcon: true});
    }

    onHoverLeave = () => {
        this.setState({showSearchIcon: false});
    }

    //when search icon is clicked
    search = () => {
        this.setState({openDialog: true});
    }

    handleClose = () => {
        this.setState({ openDialog: false });
    };

    handleYouTubeChange = (e) => {
        this.setState({youtubeLinkValue: e.target.value});
    };

    handleTwitchChange = (e) => {
        this.setState({twitchLinkValue: e.target.value});
    };

    searchLinks = () => {
        //TODO: Think about case where same link (maybe user wants to refresh)
        this.setState({youtubeLink: this.state.youtubeLinkValue});

        var ytId = getYoutubeId(this.state.youtubeLinkValue);

        if (ytId === "error") {
            this.setState({showSearchError: true});
        } else {
            this.setState({youtubeId: ytId});
        }

        var twitchEmbedLink = getTwitchLink(this.state.twitchLinkValue);

        this.setState({twitchLink: twitchEmbedLink});

        this.setState({openDialog: false});
    }

    handleSearchErrorClose = () => {
        this.setState({showSearchError: false});
    }

    render() {
        const searchShowState = this.state.showSearchIcon ? 'Search' : 'Search Hide';

        const opts = {
            width: '100%',
            height: '100%',
            playerVars: { // https://developers.google.com/youtube/player_parameters
            }
        };

        

        return (
            <div className="YouTubeScreen" onMouseEnter={this.onHover} onMouseLeave={this.onHoverLeave}>
                <div className="Options">
                    { this.state.showSearchIcon ? <MdSearch className={searchShowState} onClick={this.search} size={30} color="white"/> : null }
                    
                        <MuiThemeProvider theme={theme}>
                            <Dialog
                            open={this.state.openDialog}
                            onClose={this.handleClose}
                            aria-labelledby="form-dialog-title"
                            >
                                <DialogTitle id="form-dialog-title">Enter YouTube and Twitch Stream Links</DialogTitle>
                                <DialogContent>
                                    {/* <DialogContentText>
                                    To subscribe to this website, please enter your email address here. We will send
                                    updates occasionally.
                                    </DialogContentText> */}
                                    <TextField
                                    autoFocus
                                    margin="dense"
                                    id="youtubeLink"
                                    label="YouTube Link"
                                    fullWidth
                                    onChange={this.handleYouTubeChange}
                                    value={this.state.youtubeLinkValue}
                                    />
                                </DialogContent>
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
                <YouTube
                    videoId={this.state.youtubeId}
                    opts={opts}
                    // onReady={this._onReady}
                />
            </div>
        );
    }
}

export default YouTubeScreen;