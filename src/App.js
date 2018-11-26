import React, { Component } from 'react';
import './App.css';
import YouTubeScreen from './YouTubeScreen';
import TwitchChatScreen from './TwitchChatScreen';
// import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import Dialog from '@material-ui/core/Dialog';
// import DialogActions from '@material-ui/core/DialogActions';
// import DialogContent from '@material-ui/core/DialogContent';
// import DialogTitle from '@material-ui/core/DialogTitle';

// const theme = createMuiTheme({
//     typography: {
//         useNextVariants: true,
//     },
//     palette: {
//         primary: {
//             main: '#2196F2'
//         },
//         secondary: {
//             main: '#2196F2'
//         }
//     }
// });

// function SearchDialog(props) {
//   return (
//     <MuiThemeProvider theme={theme}>
//       <Dialog
//       open={this.state.openDialog}
//       onClose={this.handleClose}
//       aria-labelledby="form-dialog-title"
//       >
//         <DialogTitle id="form-dialog-title">Enter YouTube and Twitch Stream Links</DialogTitle>
//         <DialogContent>
//             <TextField
//             autoFocus
//             margin="dense"
//             id="youtubeLink"
//             label="YouTube Link"
//             fullWidth
//             onChange={this.handleYouTubeChange}
//             value={this.state.youtubeLinkValue}
//             />
//         </DialogContent>
//         <DialogContent>
//             <TextField
//             margin="dense"
//             id="twitchLink"
//             label="Twitch Link"
//             fullWidth
//             onChange={this.handleTwitchChange}
//             value={this.state.twitchLinkValue}
//             />
//         </DialogContent>
//         <DialogActions>
//             <Button onClick={this.handleClose} color="primary">
//             Cancel
//             </Button>
//             <Button onClick={this.searchLinks} color="primary">
//             Search
//             </Button>
//         </DialogActions>
//       </Dialog>
//   </MuiThemeProvider>
//   );
// }

// function ErrorDialog(props) {
//   return (
//     <MuiThemeProvider>
//       <Dialog
//         open={this.state.showSearchError}
//         onClose={this.handleSearchErrorClose}
//         aria-labelledby="form-dialog-title"
//         >
//           <DialogTitle id="form-dialog-title">Enter Valid YouTube/Twitch Links</DialogTitle>
//           <DialogActions>
//             <Button onClick={this.handleSearchErrorClose} color="primary">
//             Close
//             </Button>
//           </DialogActions>
//       </Dialog>
//     </MuiThemeProvider>
//   );
// }

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     openDialog: false, 
  //     showSearchError: false,
  //   };
  // }

  render() {
    return (
      <div className="App" id="App">
        <YouTubeScreen/>
        <TwitchChatScreen/>
        {/* <SearchDialog openDialog={this.state.openDialog}/>
        <ErrorDialog showSearchError={this.state.showSearchError}/> */}
      </div>
    );
  }
}

export default App;
