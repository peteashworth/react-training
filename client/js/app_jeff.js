import { createStore, bindActionCreators } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';

const reducer = (state = { result: 0 }, action) => {
  console.log('state:', state, 'action:', action);
  switch (action.type) {
    case 'ADD':
      return Object.assign({}, state, { result: state.result + action.value });
    case 'SUBTRACT':
      return Object.assign({}, state, { result: state.result - action.value });
    default:
      return state;
  }
};

const store = createStore(reducer);
const addActionCreator = value => ({ type: 'ADD', value });
const subtractActionCreator = value => ({ type: 'SUBTRACT', value });
const { add, subtract } = bindActionCreators({
  add: addActionCreator,
  subtract: subtractActionCreator,
}, store.dispatch);
store.subscribe(() => {
  const s = store.getState();
  ReactDOM.render(<MyCalculator result={s.result} add={add} subtract={subtract} />, document.querySelector('main'));
});

class MyCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: '',
    };
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  onAddClick = () => {
    this.props.add(Number(this.state.num));
    this.setState({
      num: '',
    });
  }
  onSubtractClick = () => {
    this.props.subtract(Number(this.state.num));
    this.setState({
      num: '',
    });
  }
  render() {
    return <div>
      <input type="text" id="num-input" name="num" value={this.state.num} onChange={this.onChange} />
      <button type="button" onClick={this.onAddClick}>+</button>
      <button type="button" onClick={this.onSubtractClick}>-</button>
      <p>Result: {this.props.result}</p>
    </div>;
  }
}
// add(1); // doing this -> store.dispatch(addActionCreator(1));
// subtract(2);
// add(3);
// subtract(4);
// add(5);
add(0);