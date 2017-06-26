import { GraphQLObjectType, GraphQLList, GraphQLInt } from 'graphql';

import { WidgetData } from '../widget-data';
import { widgetType } from './widget-type';

export const queryType = new GraphQLObjectType({

  name: 'Query',
  description: 'A query object for the the schema',

  fields: () => ({

    widgets: {
      type: new GraphQLList(widgetType),
      resolve: async (_1, _2, { baseUrl }) => {
        const widgetData = new WidgetData(baseUrl);
        return await widgetData.all();
      }
    },

    widget: {
      type: widgetType,
      args: {
        widgetId: {
          type: GraphQLInt,
        },
      },
      resolve: async (_, { widgetId }, { baseUrl }) => {
        const widgetData = new WidgetData(baseUrl);
        return await widgetData.one(widgetId);
      },
    },

  }),

});