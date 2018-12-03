import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YouTube from 'react-youtube';
import { MdSearch } from 'react-icons/md';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { theme } from './Theme.js'

function getYoutubeId(url) {
    var regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = url.match(regExp);
    if (match && match[2].length === 11) {
        return match[2];
    } else {
        return "error";
    }
}

class YouTubeScreen extends Component {
    constructor(props) {
        super(props);
        //LinkValue is for the dialog value
        //Link is for the current link
        this.state = {
            showSearchIcon: true, 
            openDialog: false, 
            showSearchError: false,
            youtubeLinkValue: '', 
            youtubeLink: '',
            youtubeId: ''
        };
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
    
    searchLinks = () => {
        this.setState({youtubeLink: this.state.youtubeLinkValue});

        var ytId = getYoutubeId(this.state.youtubeLinkValue);

        if (ytId === "error") {
            this.setState({showSearchError: true});
        } else {
            this.setState({youtubeId: ytId});
        }

        this.setState({openDialog: false});
    }

    handleSearchErrorClose = () => {
        this.setState({showSearchError: false});
    }

    showSearchIcon = () => {
        this.setState({showSearchIcon: true});
    }

    hideSearchIcon = () => {
        this.setState({showSearchIcon: false});
    }

    render() {
        const searchShowState = this.state.showSearchIcon ? 'YouTubeSearch' : 'Search Hide';

        const opts = {
            width: '100%',
            height: '100%',
            playerVars: { // https://developers.google.com/youtube/player_parameters
            }
        };

        return (
            <div className="YouTubeScreen" ref="YouTubeScreen" onMouseMove={this.showSearchIcon} onMouseLeave={this.hideSearchIcon}>
                <div className="Options">
                    { this.state.showSearchIcon ? <MdSearch className={searchShowState} onClick={this.search} size={30} color="white"/> : null }
                    
                        <MuiThemeProvider theme={theme}>
                            <Dialog
                            open={this.state.openDialog}
                            onClose={this.handleClose}
                            aria-labelledby="form-dialog-title"
                            >
                                <DialogTitle id="form-dialog-title">Enter YouTube Link</DialogTitle>
                                <DialogContent>
                                    <TextField
                                    autoFocus
                                    margin="dense"
                                    id="youtubeLink"
                                    label="YouTube Link"
                                    onChange={this.handleYouTubeChange}
                                    value={this.state.youtubeLinkValue}
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
                    onPlay={this.hideSearchIcon}
                    onPause={this.showSearchIcon}
                    onEnd={this.showSearchIcon}
                />
            </div>
        );
    }
}

export default YouTubeScreen;