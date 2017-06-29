import React from 'react';

class ListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data: props.children,
    };

    //console.log('list item constructor: ' + props.children);
    this.content = props.children;
  }

  componentWillUnmount() {
    //console.log('list item component will unmount: ' + this.content);
  }

  componentWillReceiveProps(nextProps) {
    //console.log('next props', nextProps, 'old props', this.props);

    this.setState({
      data: nextProps.children,
    });
  }

  render() {
    return <li>{this.props.children} : {this.state.data}</li>;
  }


}

export class UnorderedList extends React.Component {

  render() {

    return <ul>
      {this.props.itemList.map((item, i) => <ListItem key={item}>
        {item}
      </ListItem>)}
    </ul>;
  }

}
