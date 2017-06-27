import React from 'react';

export class ColorTool extends React.Component {

  render() {

    const colors = ['blue', 'green', 'red', 'hot pink'];

    // exercise 2
    // display a table of cars

    // please use the table tag, and please display all of the columns
    // copy your car data from db.json

    return <div>
      <header>
        <h1>Color Tool</h1>
        <ul>
          {colors.map((color, i) => <li key={i}>{color}</li>)}
        </ul>
      </header>
    </div>;
  }

}