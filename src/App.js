import React, { Component } from 'react';

import ExampleMuiBox from './ExampleMuiBox';
import ExampleEmotionStyled from './ExampleEmotionStyled';

import { palette, spacing, typography } from '@material-ui/system';
// import styled from '@emotion/styled';

// const Box = styled.div`${palette}${spacing}${typography}`;
import { unstable_Box as Box } from '@material-ui/core/Box';



class App extends Component {
  render() {
    return ([
      <h1>Material-UI Box Example</h1>,
      <ExampleMuiBox />,
      <h1>Emotion Styled Example</h1>,
      <ExampleEmotionStyled />,
    ]);
  }
}

export default App;
