import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import SwipeableViews from 'react-swipeable-views';
import Tabs, { Tab } from 'material-ui/Tabs';
import TabContainer from '../TabContainer';

const styles = theme => ({

})

class Resume extends Component {

  state = {
    value: 0
  }

  handleTabChange = (event, value) => {
    this.setState({value})
  }

  handleTabChangeIndex = index => {
    this.setState({value: index})
  }

  render() {

    const { theme } = this.props;
    return (
      <div>
        <Tabs
          value={this.state.value}
          onChange={this.handleTabChange}
          indicatorColor='primary'
          textColor='primary'
          fullWidth
          centered
        >
          <Tab label='Professional Experience' />
          <Tab label='Education' />
          <Tab label='Projects' />
          <Tab label='Summary' />
        </Tabs>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>yo</TabContainer>
          <TabContainer dir={theme.direction}>yoyo</TabContainer>
          <TabContainer dir={theme.direction}>yoyoyo</TabContainer>
          <TabContainer dir={theme.direction}>yoyoyoyo</TabContainer>
        </SwipeableViews>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(Resume);

