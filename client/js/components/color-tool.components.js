import React from 'react';

export class ColorTool extends React.Component {

  render() {

    return <div>
      <header>
        <h1>Color Tool</h1>
        <ul>
          {this.props.colorList.map((color, i) => <li key={i}>{color}</li>)}
        </ul>
      </header>
    </div>;
  }

}