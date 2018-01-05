import React, { Component } from 'react';
import '../../styles/app.css';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Reboot from 'material-ui/Reboot';

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
    backgroundColor: '#CDDC39'
  }
}

export class App extends Component {

  constructor(props) {
    super(props);
    this.classes = this.props.classes; 
  }

  
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Reboot>
            <AppBar position='static' className={this.classes.appBarColors}>
              <Toolbar>
                <IconButton className={this.classes.menuButton} color="contrast" aria-label="Menu">
                  <MenuIcon />
                </IconButton>
                <Typography type='title' color='inherit'>
                  Ravi Theja Indluru
                </Typography>
              </Toolbar>
            </AppBar>
          </Reboot>
      </div>
      </MuiThemeProvider>     
    );
  }
}

export default withStyles(styles)(App);
