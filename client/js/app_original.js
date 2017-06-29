import React from 'react';
import ReactDOM from 'react-dom';

import { ColorTool, } from './components/color-tool.components';

const colors = ['blue', 'green', 'red', 'orange'];

// exercise 

// setup CarTool/ColorTool to use Redux
// Connect the CarTool/ColorTool component to the Redux store via connect

document.addEventListener('DOMContentLoaded', () => {

  ReactDOM.render(<ColorTool colorList={colors} />, document.querySelector('main'));

});

