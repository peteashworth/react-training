import { GraphQLObjectType, GraphQLList, GraphQLID } from 'graphql';

import { widgetType } from './widget-type';

// exercise 2

// create a car type with the following fields
// id: GraphQLInt
// make: GraphQLString
// model: GraphQLString
// year: GraphQLInt
// price: GraphQLFloat

// add to the query type, two fields, cars and car(carId)

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
      resolve: () => widgetData,
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
      resolve: (_, { widgetId }) => widgetData.find(w => w.id === widgetId),
    }
  }),
});