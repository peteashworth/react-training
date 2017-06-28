import React from 'react';

import { BaseComponent } from './base-component';

// exercise

// move the car form to its own component

// bonus exercise: update the onChange function to work with number

// <input type="number" />
// add support for converting number input types to number for updating
// the state

export class ColorForm extends BaseComponent {

  constructor(props) {
    super(props);

    this.state = {
      newColor: '',
    };
  }

  onClick = () => {

    this.props.onSubmitColor(this.state.newColor);

    this.setState({
      newColor: '',
    });

  }

  render() {
    return <form>
      <div>
        <label htmlFor="new-color-input">New Color:</label>
        <input type="text" id="new-color-input" name="newColor"
          value={this.state.newColor} onChange={this.onChange} />
      </div>
      <button type="button" onClick={this.onClick}>Add Color</button>
    </form>;
  }

}