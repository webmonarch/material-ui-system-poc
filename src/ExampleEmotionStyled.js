import React, { Component } from 'react';

import { spacing, palette, typography } from '@material-ui/system';
import styled from '@emotion/styled';

const Box = styled.div`${palette}${spacing}${typography}`;

class App extends Component {
  render() {
    return (
      <Box
        color="primary.main"
        bgcolor="background.paper"
        fontFamily="h6.fontFamily"
        fontSize={{ xs: 'h6.fontSize', sm: 'h4.fontSize', md: 'h3.fontSize' } }
        p={{ xs: 2, sm: 3, md: 4} }
      >
        @material-ui/system
      </Box>
    );
  }
}

export default App;
