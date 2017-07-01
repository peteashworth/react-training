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
  DELETE_CAR_REQUEST: null,
});

const refreshCarsRequest = () => ({ type: actionTypes.REFRESH_CARS_REQUEST });

const refreshCarsDone = cars => ({ type: actionTypes.REFRESH_CARS_DONE, cars });

const deleteCarRequest = carId => ({ type: actionTypes.DELETE_CAR_REQUEST, carId });

const refreshCars = () => {

  return dispatch => {

    dispatch(refreshCarsRequest());

    return fetch('http://localhost:3010/cars')
      .then(res => res.json())
      .then(cars => setTimeout(() => dispatch(refreshCarsDone(cars)), 2000));

  };

};

const deleteCar = carId => {

  return dispatch => {

    dispatch(deleteCarRequest(carId));

    return fetch('http://localhost:3010/cars/' + encodeURIComponent(carId), {
      method: 'DELETE',
    })
      .then(() => fetch('http://localhost:3010/cars'))
      .then(res => res.json())
      .then(cars => setTimeout(() => dispatch(refreshCarsDone(cars)), 2000));
  };

};


const reducer = (state = { cars: [] }, action) => {

  switch (action.type) {
    case actionTypes.REFRESH_CARS_REQUEST:
      return Object.assign({}, state, { showSpinner: true, cars: [] });
    case actionTypes.DELETE_CARS_REQUEST:
      return Object.assign({}, state, { showSpinner: true });
    case actionTypes.REFRESH_CARS_DONE:
      return Object.assign({}, state, { showSpinner: false, cars: action.cars });
    default:
      return state;
  }

};

const store = createStore(reducer, applyMiddleware(thunk));

const CarTable = props => {

  // implement delete car and as part of the delete, refresh the list

  const deleteCar = carId => {
    props.deleteCar(carId);
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
    return <div>
      {this.props.showSpinner && <span>Can you me spin!</span>}
      <CarTable {...this.props} />
      <button type="button" onClick={this.props.refreshCars}>Refresh</button>
    </div>;
  }

}

// const connect = (mapStateToProps, mapDispatchToProps) => {

//   return PresentationalComponent => {

//     return class ContainerComponent extends React.Component {

//       constructor(props) {
//         super(props);
//         this.state = typeof mapDispatchToProps === 'function'
//           ? mapDispatchToProps(this.props.store.dispatch)
//           : bindActionCreators(mapDispatchToProps, this.props.store.dispatch);
//       }

//       componentDidMount() {
//         this.unsubscribeStore = this.props.store.subscribe(() => {
//           this.setState(mapStateToProps(this.props.store.getState()));
//         });
//       }

//       componentWillUnmount() {
//         this.unsubscribeStore();
//       }

//       render() {
//         return <PresentationalComponent {...this.state} />;
//       }

//     };
//   };
// };


const CarToolContainer = connect(
  ({ showSpinner, cars }) => ({ showSpinner, cars }), // mapStateToProps
  dispatch => bindActionCreators({ refreshCars, deleteCar }, dispatch), // mapDispatchToProps
)(CarTool);

ReactDOM.render(<Provider>
  <CarToolContainer store={store} />
</Provider>, document.querySelector('main'));
