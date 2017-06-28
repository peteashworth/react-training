import React from 'react';

import { ToolHeader } from './tool-header.component';
import { UnorderedList } from './unordered-list.component';
import { ColorForm } from './color-form.component';

export class ColorTool extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      colorList: props.colorList.concat(),
    };

    this.addColor = this.addColor.bind(this);
  }

  addColor(newColor) {
    this.setState({
      colorList: this.state.colorList.concat(newColor),
    });
  }

  render() {

    return <div>
      <ToolHeader headerText="Color Tool" />
      <UnorderedList itemList={this.state.colorList} />
      <ColorForm onSubmitColor={this.addColor} />
    </div>;
  }

}