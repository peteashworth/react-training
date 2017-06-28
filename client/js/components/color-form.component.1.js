import React from 'react';
import PropTypes from 'prop-types';

import { BaseComponent } from './base-component';

export class ColorForm extends BaseComponent {

  static propTypes = {
    onSubmitColor: PropTypes.func.isRequired,
  }

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

// ColorForm.propTypes = { };