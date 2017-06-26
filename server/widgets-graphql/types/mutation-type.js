import { GraphQLObjectType } from 'graphql';

import { WidgetData } from '../widget-data';
import { insertWidgetInputType } from './widget-input-type';
import { widgetType } from './widget-type';


// homework

// add the code to add a car to the rest service through a GraphQL mutation query

export const mutation = new GraphQLObjectType({

  name: 'Mutation',

  fields: () => ({

    // GraphQL Mutation Query
    // mutation InsertWidget($insertWidget: InsertWidgetInputType) {
    //   insertWidget(widget: $insertWidget) {
    //     id
    //     name
    //   }
    // }    

    // GraphQL Query Variables
    // {
    //   "insertWidget": {
    //     "name": "Bob",
    //     "description": "Bob is cool",
    //     "color": "blue",
    //     "size": "small",
    //     "quantity": 12
    //   }
    // }

    // function name
    insertWidget: {
      // function params
      args: {
        widget: {
          type: insertWidgetInputType,
        }
      },
      // function return value
      type: widgetType,
      resolve: (_, { widget }, { baseUrl }) => {
        const widgetData = new WidgetData(baseUrl);
        return widgetData.insert(widget);
      }
    }

  }),

});