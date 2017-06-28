import React from 'react';
import PropTypes from 'prop-types';

import { BaseComponent } from './base-component';

export class ColorForm extends BaseComponent {

  static propTypes = {
    onSubmitColor: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.newColorInput.focus();
  }

  onClick = (e) => {
    console.log('target', e.target.tagName, 'currentTarget', e.currentTarget.tagName);
    this.props.onSubmitColor(this.newColorInput.value);
  }

  onEnterKey = (e) => {

    if (e.keyCode === 13) {
      e.preventDefault();
      this.props.onSubmitColor(this.newColorInput.value);
    }

  }

  componentWillUpdate() {
    console.log('about to re-render');
  }

  componentDidUpdate() {
    console.log('just did the render');
  }

  render() {

    return <form>
      <div>
        <label htmlFor="new-color-input">New Color:</label>
        <input type="text" id="new-color-input" name="newColor"
          defaultValue={this.props.initialNewColorValue}
          ref={input => this.newColorInput = input} onKeyDown={this.onEnterKey} />
      </div>
      <button type="button" onClick={this.onClick}>Add Color</button>
    </form>;
  }

}

// ColorForm.propTypes = { };