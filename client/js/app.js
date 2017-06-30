import React from 'react';
import PropTypes from 'prop-types';
import { createStore, bindActionCreators } from 'redux';
import { connect, Provider } from 'react-redux';

const reducer = (state = { cars: [] }, action) => {

  switch (action.type) {
    default:
      return state;
  }

};

const store = createStore(reducer);


const CarTable = props => {

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
      {props.cars.map(car => <tr>
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


const CarTableContainer = connect(
  ({ cars }) => ({ cars }), // mapStateToProps
  dispatch => bindActionCreators(actions, dispatch), // mapDispatchToProps
)(CarTable);

ReactDOM.render(<Provider store={store}>
  <CarTableContainer />
</Provider>, document.querySelector('main'));
