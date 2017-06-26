import { GraphQLObjectType, GraphQLList } from 'graphql';

import { widgetType } from './widget-type';

// exercise 1

// create an endpoint which returns a single hardcoded widget

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

        return [
          {
            id: 1, name: 'Widget 1', description: 'Widget 1 Desc',
            color: 'blue', size: 'large', quantity: 3,
          },
          {
            id: 2, name: 'Widget 2', description: 'Widget 2 Desc',
            color: 'blue', size: 'large', quantity: 3,
          }
        ];

      }
    }
  }),

});