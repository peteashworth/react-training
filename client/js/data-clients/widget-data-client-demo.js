import { WidgetDataClient } from './widget-data-client';

const widgetDataClient = new WidgetDataClient('http://localhost:3000/graphql');

widgetDataClient.all().then(result => console.log(result));

widgetDataClient.one(2).then(result => console.log(result));

widgetDataClient.insert({
  name: 'data client test',
  description: 'data client test',
  color: 'red',
  size: 'large',
  quantity: 2,
}).then(result => console.log(result));

widgetDataClient.replace({
  id: 11,
  name: 'data client test',
  description: 'data client test',
  color: 'red',
  size: 'large',
  quantity: 20,
}).then(result => console.log(result));

widgetDataClient.delete(12).then(result => console.log(result));
