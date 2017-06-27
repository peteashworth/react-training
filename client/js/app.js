import React from 'react';
import ReactDOM from 'react-dom';

import { ColorTool } from './components/color-tool.components';
// add an import to bring CarTool

// exercise 1
// create a car tool component which display a header with 'Car Tool'


// ReactDOM.render(<ColorTool />, document.querySelector('main'));
ReactDOM.render(<CarTool />, document.querySelector('main'));

// ReactDOM.render(
//   React.createElement(ColorTool),
//   document.querySelector('main'));