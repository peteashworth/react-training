import { createStore, bindActionCreators } from 'redux';

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

// exercise part 1 - build the MyCalcutor component



// exercise part 2 - implement multiply and divide