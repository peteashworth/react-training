import React from 'react';
import ReactDOM from 'react-dom';

import { ColorTool, } from './components/color-tool.components';

const colors = ['blue', 'green', 'red', 'orange'];

document.addEventListener('DOMContentLoaded', () => {

  ReactDOM.render(<ColorTool colorList={colors} />, document.querySelector('main'));

});
