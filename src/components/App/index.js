import React, { Component } from 'react';
import '../../styles/app.css';
import { MuiThemeProvider, createMuiTheme, withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Reboot from 'material-ui/Reboot';
import { GithubCircle, FacebookBox, LinkedinBox } from 'mdi-material-ui';
import { AppBar, Toolbar, Typography, Button, Paper } from 'material-ui';
import Grow from 'material-ui/transitions/Grow';
import { Manager, Target, Popper } from 'react-popper';
import classNames from 'classnames';
import ClickAwayListener from 'material-ui/utils/ClickAwayListener';
import { MenuItem, MenuList } from 'material-ui/Menu';

import Resume from '../Resume';

const theme = createMuiTheme({
  
})

const styles = {
  root: {
    width: '100%'
  },
  flex: {
    flex: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  appBarColors: {
    backgroundColor: '#4FC3F7',
    color: 'black'
  },
  marginR20: {
    marginRight: 20
  }
}

export class App extends Component {

  constructor(props) {
    super(props);
    this.classes = this.props.classes;
    this.state = {
      openInterests: false
    } 
  }

  handleClickInterests = () => {
    this.setState(prevState => ({openInterests: !prevState.openInterests}));
  }

  handleCloseInterests = () => {
    this.setState(prevState => ({openInterests: false}));
  }

  handleClickResume = () => {
    // this.setState(prevState => ({
    //   viewResume: true
    // }), () => console.log(this.state))

    this.setState({
      viewResume: true
    }, () => console.log(this.state))
  }
  
  render() {

    const { classes } = this.props;
    const  open  = this.state.openInterests;

    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Reboot>
            <AppBar position='static' className={this.classes.appBarColors}>
              <Toolbar>
                <IconButton className={this.classes.menuButton} aria-label="Menu">
                  <MenuIcon />
                </IconButton>
                <Typography type='title' className={this.classes.marginR20}>
                  Ravi Theja Indluru
                </Typography>
                <LinkedinBox className={this.classes.marginR20} />
                <GithubCircle className={this.classes.marginR20} />
                <FacebookBox className={this.classes.marginR20} />
                <Button>Intro</Button>
                <Button onClick={this.handleClickResume}>Resume</Button>
                <Manager>
                  <Target>
                    <Button aria-haspopup='true' onClick={this.handleClickInterests}>Interests</Button>
                  </Target>
                    <Popper 
                      placement='bottom-start'
                      eventsEnabled={open}
                      className={classNames({[classes.popperClose]: !open})}
                    >
                      <ClickAwayListener onClickAway={this.handleCloseInterests}>
                        <Grow in={open} id="menu-list" style={{ transformOrigin: '0 0 0' }}>
                          <Paper>
                            <MenuList role="menu">
                              <MenuItem onClick={this.handleCloseInterests}>Photography</MenuItem>
                              <MenuItem onClick={this.handleCloseInterests}>VR</MenuItem>
                              <MenuItem onClick={this.handleCloseInterests}>Astrophysics</MenuItem>
                            </MenuList>
                          </Paper>
                        </Grow>
                      </ClickAwayListener>
                    </Popper>
                </Manager>
              </Toolbar>
            </AppBar>
            {this.state.viewResume && <Resume />}
          </Reboot>
        </div>
      </MuiThemeProvider>     
    );
  }
}

export default withStyles(styles)(App);
