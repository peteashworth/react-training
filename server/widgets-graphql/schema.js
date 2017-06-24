import { GraphQLSchema, GraphQLObjectType, GraphQLList } from 'graphql';

import { WidgetData } from './widget-data';
import { widgetType } from './widget-type';

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({

    name: 'Query',
    fields: () => ({
      widgets: {
        type: new GraphQLList(widgetType),
        resolve: async (_1, _2, { baseUrl }) => {
          const widgetData = new WidgetData(baseUrl + '/widgets');
          return await widgetData.all();
        }
      }
    })
  })
});