
// create a fetch call to insert a car, then retrieve the
// list of cars, and the list should include the new car


// let conPromise;

// const getConnection() {

//   if (!conPromise) {
//     conPromise = new Promise(function (resolve, reject) {
//       connectToDb(function (con) {
//         resolve(con);
//       })

//     });

//   }

//   return conPromise;

// }

// getConnection().then((con) => Promise.all([con, runQuery(con, 'select * from widget')])).then(results => results[0] // would be con)


// GET request with no request body, no custom headers
// fetch('http://localhost:3010/widgets')
//   .then(res => res.json())
//   .then(widgets => console.log(widgets))
//   .then(() => fetch('http://localhost:3010/widgets/1'))
//   //.then(() => Promise.reject('sorry we do not give cards to people with a 350 credit score'))
//   .then(res => res.json())
//   .then(widget => console.log(widget))
//   .catch((err) => console.error(err));


// const p1 = fetch('http://localhost:3010/widgets').then(res => res.json());
// const p2 = fetch('http://localhost:3040/widgets/1').then(res => res.json());

// p1.then(results => console.info(results));

// Promise.all([p1, p2]).then(function allDone(result) {
//   console.log(result);
// }).catch(err => console.error(err));

// fetch('http://localhost:3010/widgets', {
//   method: 'POST',
//   headers: new Headers({ 'Content-Type': 'application/json' }),
//   body: JSON.stringify({
//     name: 'a widget',
//     description: 'this is a cool widget',
//     color: 'red',
//     size: 'small',
//     quantity: 1,
//   })
// }).then(res => res.json()).then(results => console.log(results));


