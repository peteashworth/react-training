import { GraphQLObjectType, GraphQLList, GraphQLID } from 'graphql';
import fetch from 'node-fetch';

import { widgetType } from './widget-type';

// exercise 5

// use the context of baseUrl to setup URL for widget, cars, and car
// use a template literal to build the URL
// and be sure to encode data values in the URL

export const query = new GraphQLObjectType({

  name: 'Query',
  description: 'Query endpoint for my GraphQL server',

  fields: () => ({
    widgets: {
      type: new GraphQLList(widgetType),
      description: 'A list of widgets',
      resolve: (_1, _2, { baseUrl }) =>
        fetch(`${baseUrl}/widgets`)
          .then(res => res.json()),
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
      resolve: (_, { widgetId }) =>
        fetch('http://localhost:3000/api/widgets/' + encodeURIComponent(widgetId))
          .then(res => res.json()),
    }
  }),
});