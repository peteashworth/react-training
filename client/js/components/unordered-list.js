import React from 'react';
import PropTypes from 'prop-types';

export class UnorderedList extends React.Component {

  static propTypes = {
    listItems: PropTypes.array,
  };

  render() {
    return <ul>
      {this.props.listItems.map((listItem, i) => <li key={i}>
        {listItem}
      </li>)}
    </ul>;
  }

}