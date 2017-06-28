import React from 'react';
import PropTypes from 'prop-types';

import { ToolHeader } from './tool-header.component';
import { UnorderedList } from './unordered-list.component';
import { ColorForm } from './color-form.component';

export class ColorTool extends React.Component {

  static propTypes = {
    colorList: PropTypes.array,
  }

  static defaultProps = {
    colorList: [],
  }

  constructor(props) {
    super(props);

    this.state = {
      itemList: props.colorList.concat(),
    };

    this.addColor = this.addColor.bind(this);

    // setTimeout(() => {

    //   this.setState({
    //     itemList: this.state.itemList.slice(0, 1).concat(this.state.itemList.slice(2))
    //   });

    // }, 3000);
  }

  addColor(newColor) {
    this.setState({
      itemList: this.state.itemList.concat(newColor),
    });
  }

  render() {

    return <div>
      <ToolHeader headerText="Color Tool" />
      <UnorderedList itemList={this.state.itemList} />
      <ColorForm onSubmitColor={this.addColor} initialNewColorValue="black" />
    </div>;
  }

}

// web whiteboard