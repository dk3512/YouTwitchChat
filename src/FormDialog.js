import React, { Component } from 'react';
import 'typeface-roboto';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
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

export default class FormDialog extends Component {
  constructor(props) {
      super(props);
      this.state = {
          open: true
      }
      if (this.props.open) {
          this.setState({open: true});
      } else {
          this.setState({open: false});
      }
  }



  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
            <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
            >
            <DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
            <DialogContent>
                <DialogContentText>
                To subscribe to this website, please enter your email address here. We will send
                updates occasionally.
                </DialogContentText>
                <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Email Address"
                type="email"
                fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                Cancel
                </Button>
                <Button onClick={this.handleClose} color="primary">
                Subscribe
                </Button>
            </DialogActions>
            </Dialog>
        </MuiThemeProvider>
      </div>
    );
  }
}