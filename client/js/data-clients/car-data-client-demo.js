import { CarDataClient } from './car-data-client';

const carDataClient = new CarDataClient('http://localhost:3000/graphql');

carDataClient.all().then(result => console.log(result));

carDataClient.one(2).then(result => console.log(result));

carDataClient.insert({
  make: 'GM',
  model: 'Volt',
  year: 2017,
  color: 'blue',
  price: 123.32,
}).then(result => console.log(result));

carDataClient.replace({
  id: 3,
  make: 'GM',
  model: 'Bolt',
  year: 2017,
  color: 'blue',
  price: 123.32,
}).then(result => console.log(result));

carDataClient.delete(3).then(result => console.log(result));