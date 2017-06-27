import React from 'react';

export class ColorTool extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      colorList: props.colorList.concat(),
      newColor: '',
    };

    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  onClick() {
    this.setState({
      colorList: this.state.colorList.concat(this.state.newColor),
      newColor: '',
    });
  }

  render() {

    return <div>
      <header>
        <h1>Color Tool</h1>
      </header>
      <ul>
        {this.state.colorList.map((color, i) => <li key={i}>{color}</li>)}
      </ul>
      <form>
        <div>
          <label htmlFor="new-color-input">New Color:</label>
          <input type="text" id="new-color-input" name="newColor"
            value={this.state.newColor} onChange={this.onChange} />
        </div>
        <button type="button" onClick={this.onClick}>Add Color</button>
      </form>
    </div>;
  }

}