import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { createStore, bindActionCreators, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import keyMirror from 'key-mirror';
import thunk from 'redux-thunk';

const actionTypes = keyMirror({
  REFRESH_CARS_REQUEST: null,
  REFRESH_CARS_DONE: null,
});

const refreshCarsRequest = () => ({ type: actionTypes.REFRESH_CARS_REQUEST });

const refreshCarsDone = cars => ({ type: actionTypes.REFRESH_CARS_DONE, cars });

const refreshCars = () => {

  return dispatch => {

    dispatch(refreshCarsRequest());

    return fetch('http://localhost:3010/cars')
      .then(res => res.json())
      .then(cars => dispatch(refreshCarsDone(cars)));

  };

};

// const deleteCar = (carIdToDelete) => { };


const reducer = (state = { cars: [] }, action) => {

  switch (action.type) {
    case actionTypes.REFRESH_CARS_REQUEST:
      return Object.assign({}, state, { cars: [] });
    case actionTypes.REFRESH_CARS_DONE:
      return Object.assign({}, state, { cars: action.cars });
    default:
      return state;
  }

};

const store = createStore(reducer, applyMiddleware(thunk));

const CarTable = props => {

  // implement delete car and as part of the delete, refresh the list

  const deleteCar = carId => {
    this.props.deleteCar(carId);
  };

  return <table>
    <thead>
      <tr>
        <th>Make</th>
        <th>Model</th>
        <th>Year</th>
        <th>Color</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {props.cars.map(car => <tr key={car.id}>
        <td>{car.make}</td>
        <td>{car.model}</td>
        <td>{car.year}</td>
        <td>{car.color}</td>
        <td>{car.price}</td>
        <td><button type="button" onClick={() => deleteCar(car.id)} >Delete</button></td>
      </tr>)}
    </tbody>
  </table>;

};

CarTable.propTypes = {
  cars: PropTypes.array,
};

CarTable.defaultProps = {
  cars: [],
};

class CarTool extends React.Component {

  static propTypes = {
    refreshCars: PropTypes.func,
  }

  componentDidMount() {
    this.props.refreshCars();
  }

  render() {
    return <CarTable {...this.props} />;
  }

}


const CarToolContainer = connect(
  ({ cars }) => ({ cars }), // mapStateToProps
  dispatch => bindActionCreators({ refreshCars }, dispatch), // mapDispatchToProps
)(CarTool);

ReactDOM.render(<Provider store={store}>
  <CarToolContainer />
</Provider>, document.querySelector('main'));
