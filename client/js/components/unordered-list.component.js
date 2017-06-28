import React from 'react';

export class UnorderedList extends React.Component {

  render() {

    return <ul>
      {this.props.itemList.map((item, i) => <li key={i}>{item}</li>)}
    </ul>;

  }

}