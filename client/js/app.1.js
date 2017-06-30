import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, bindActionCreators } from 'redux';
import { connect, Provider } from 'react-redux';

const reducer = (state = { result: 0 }, action) => {
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

// map the store's application state to the presentational component's props
const mapStateToProps = (appState) => ({ result: appState.result });

// map the store's bound action creators to the presentational component's props
const mapDispatchToProps = (dispatch) => bindActionCreators({
  add: addActionCreator,
  subtract: subtractActionCreator,
}, dispatch);



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

// defines the connection between the store and presentational component
const containerCreator = connect(mapStateToProps, mapDispatchToProps);

// creates the container which implements the connection between store and the presentational component
const MyCalculatorContainer = containerCreator(MyCalculator);

ReactDOM.render(
  <Provider store={store}>
    <MyCalculatorContainer />
  </Provider>
  , document.querySelector('main'));