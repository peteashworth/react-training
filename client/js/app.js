import React from 'react';
import ReactDOM from 'react-dom';

import { ColorTool, ColorToolB } from './components/color-tool.components';

const colors = ['blue', 'green', 'red', 'orange'];

// exercise

// use ToolHeader for Car Tool
// Move CarTable to its own component

ReactDOM.render(<div>
  <ColorTool colorList={colors} />
</div>, document.querySelector('main'));
