import React from 'react';
import ReactDOM from 'react-dom';

class DemoList extends React.PureComponent {

  render() {

    console.log('render');

    return <ul>
      {this.props.items.map(item => <li>{item}</li>)}
    </ul>;

  }


}

class DemoTool extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      items: ['red', 'white', 'blue'],
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        //items: this.state.items.concat('purple'),
        thisIsCool: true,
      });
    }, 3000);
  }

  render() {

    return <div>
      {this.state.thisIsCool && <span>coolness!</span>}
      <DemoList items={this.state.items}></DemoList>
    </div>;

  }

}

ReactDOM.render(<DemoTool />, document.querySelector('main'));