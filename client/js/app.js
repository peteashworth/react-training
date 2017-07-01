import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { createStore, applyMiddleware } from 'redux';
import { connect, Provider } from 'react-redux';
import keyMirror from 'key-mirror';
import thunk from 'redux-thunk';

const actionTypes = keyMirror({
  REFRESH_CARS_REQUEST: null,
  REFRESH_CARS_DONE: null,
  DELETE_CAR_REQUEST: null,
  ADD_CAR_REQUEST: null,
});

const refreshCarsRequest = () => ({ type: actionTypes.REFRESH_CARS_REQUEST });

const refreshCarsDone = cars => ({ type: actionTypes.REFRESH_CARS_DONE, cars });

const deleteCarRequest = carId => ({ type: actionTypes.DELETE_CAR_REQUEST, carId });

const addCarRequest = car => ({ type: actionTypes.DELETE_CAR_REQUEST, car });

const refreshCars = () => {

  return dispatch => {

    dispatch(refreshCarsRequest());

    return fetch('http://localhost:3010/cars')
      .then(res => res.json())
      .then(cars => dispatch(refreshCarsDone(cars)));

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
      .then(cars => dispatch(refreshCarsDone(cars)));
  };

};

const addCar = car => {

  return dispatch => {

    dispatch(addCarRequest(car));

    return fetch('http://localhost:3010/cars', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(car),
    })
      .then(() => fetch('http://localhost:3010/cars'))
      .then(res => res.json())
      .then(cars => dispatch(refreshCarsDone(cars)));
  };

};


const reducer = (state = { cars: [] }, action) => {

  switch (action.type) {
    case actionTypes.REFRESH_CARS_REQUEST:
      return Object.assign({}, state, { showSpinner: true, cars: [] });
    case actionTypes.DELETE_CARS_REQUEST:
      return Object.assign({}, state, { showSpinner: true });
    case actionTypes.ADD_CARS_REQUEST:
      return Object.assign({}, state, { showSpinner: true });
    case actionTypes.REFRESH_CARS_DONE:
      return Object.assign({}, state, { showSpinner: false, cars: action.cars });
    default:
      return state;
  }

};

const store = createStore(reducer, applyMiddleware(thunk));

const CarTable = props => {

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
  deleteCar: PropTypes.func,
};

CarTable.defaultProps = {
  cars: [],
};

class CarForm extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      make: '',
      model: '',
      year: 1900,
      color: '',
      price: 0,
    };
  }

  onChange = (e) => {

    this.setState({
      [e.currentTarget.name]: e.currentTarget.type === 'number'
        ? Number(e.currentTarget.value) : e.currentTarget.value,
    });
  }

  onClick = () => {

    this.props.addCar(Object.assign({}, this.state));

    this.setState({
      make: '',
      model: '',
      year: 1900,
      color: '',
      price: 0,
    });
  }

  render() {

    return <form>
      <div>
        <label htmlFor="make-input">Make:</label>
        <input type="text" id="make-input" name="make"
          value={this.state.make} onChange={this.onChange} />
      </div>
      <div>
        <label htmlFor="model-input">Model:</label>
        <input type="text" id="model-input" name="model"
          value={this.state.model} onChange={this.onChange} />
      </div>
      <div>
        <label htmlFor="year-input">Year:</label>
        <input type="number" id="year-input" name="year"
          value={this.state.year} onChange={this.onChange} />
      </div>
      <div>
        <label htmlFor="color-input">Color:</label>
        <input type="text" id="color-input" name="color"
          value={this.state.color} onChange={this.onChange} />
      </div>
      <div>
        <label htmlFor="price-input">Price:</label>
        <input type="number" id="price-input" name="price"
          value={this.state.price} onChange={this.onChange} />
      </div>
      <button type="button" onClick={this.onClick}>Add Car</button>
    </form>;
  }

}

CarForm.propTypes = {
  addCar: PropTypes.func,
};

class CarTool extends React.Component {

  static propTypes = {
    refreshCars: PropTypes.func,
    showSpinner: PropTypes.bool,
  }

  componentDidMount() {
    this.props.refreshCars();
  }

  render() {
    return <div>
      {this.props.showSpinner && <span>Loading...</span>}
      <CarTable {...this.props} />
      <CarForm {...this.props} />
      <button type="button" onClick={this.props.refreshCars}>Refresh</button>
    </div>;
  }

}


const CarToolContainer = connect(
  ({ showSpinner, cars }) => ({ showSpinner, cars }),
  { refreshCars, deleteCar, addCar },
)(CarTool);

ReactDOM.render(<Provider store={store}>
  <CarToolContainer />
</Provider>, document.querySelector('main'));
