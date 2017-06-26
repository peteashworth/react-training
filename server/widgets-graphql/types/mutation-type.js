import { GraphQLObjectType } from 'graphql';

import { WidgetData } from '../widget-data';
import { widgetType } from './widget-type';
import { insertWidgetInputType, updateWidgetInputType, deleteWidgetInputType } from './widget-input-type';

export const mutationType = new GraphQLObjectType({

  name: 'Mutation',
  description: 'Widget mutations',

  fields: () => ({

    insertWidget: {
      type: widgetType,
      args: {
        widget: { type: insertWidgetInputType },
      },
      resolve: async (_, { widget }, { baseUrl }) => {
        const widgetData = new WidgetData(baseUrl);
        const insertedWidget = await widgetData.insert(widget);
        return insertedWidget;
      },
    },

    // updateWidget: {

    // },

    // deleteWidget: {

    // }

  }),

});