import React from 'react';
import Typography from 'material-ui/Typography';

const TabContainer = ({ children, dir }) => (
  <Typography component="div" dir={dir} style={{padding: 8 * 4}}>
    {children}
  </Typography>
)

export default TabContainer;