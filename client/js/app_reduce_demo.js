

const nums = [
  { type: 'ADD', value: 1 },
  { type: 'SUBTRACT', value: 2 },
  { type: 'ADD', value: 3 },
  { type: 'SUBTRACT', value: 4 },
  { type: 'ADD', value: 5 },
];

// const states = [];

const initialState = { result: 0 };

const finalState = nums.reduce((state, action) => {

  console.log('state:', state, 'action:', action);

  //states.push(state);

  switch (action.type) {
    case 'ADD':
      return Object.assign({}, state, { result: state.result + action.value });
    case 'SUBTRACT':
      return Object.assign({}, state, { result: state.result - action.value });
    default:
      return state;
  }

}, initialState);

console.log('final state:', finalState);

//console.log(states);


// const a = {
//   fn: 'Bob',
//   ln: 'Smith',
//   age: 34,
//   hairColor: 'brown',
// };

// const b = {};

// inefficient
// for (let prop in a) {
//   b[prop] = a[prop];
// }

// const b = Object.assign({}, a, { age: a.age + 1, hairColor: 'purple' });

// b.hairColor = 'white';

// // b.fn = a.fn;
// // b.ln = a.ln;
// //b.age = a.age + 1;

// // object a and object b have the same shape
// console.log(a);
// console.log(b);







