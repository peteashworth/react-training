import { GraphQLObjectType, GraphQLList, GraphQLID } from 'graphql';
import fetch from 'node-fetch';

import { widgetType } from './widget-type';

// exercise 3

// move your car array to db.json
// [
//  "cars": stringified content
// ]

// configure the cars and car endpoints to pull data from the JSON server


const widgetData = [
  {
    id: '1', name: 'Widget 1', description: 'Widget 1 Desc',
    color: 'blue', size: 'large', quantity: 3,
  },
  {
    id: '2', name: 'Widget 2', description: 'Widget 2 Desc',
    color: 'blue', size: 'large', quantity: 3,
  }
];

export const query = new GraphQLObjectType({

  name: 'Query',
  description: 'Query endpoint for my GraphQL server',

  fields: () => ({
    widgets: {

      // return data type
      // is always populated by the return of resolve
      type: new GraphQLList(widgetType),

      description: 'A list of widgets',
      resolve: () => {

        return fetch('http://localhost:3000/api/widgets').then(res => res.json());

        // const res = await fetch('http://localhost:3000/api/widgets');
        // const widgetList = await res.json();
        // return widgetList;
      },
    },
    widget: {
      type: widgetType,
      description: 'A single widgets',
      args: {
        widgetId: {
          type: GraphQLID,
          description: 'The id of the widget to load',
        }
      },
      // first param is the object populating the type
      // second params are the args
      // third param is the context object
      // fourth param is the field info
      resolve: (_, { widgetId }) => {

        return fetch('http://localhost:3000/api/widgets/' + widgetId)
          .then(res => res.json());

      },
    }
  }),
});