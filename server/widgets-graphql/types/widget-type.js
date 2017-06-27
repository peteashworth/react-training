import { GraphQLObjectType, GraphQLString, GraphQLInt } from 'graphql';

export const widgetType = new GraphQLObjectType({

  name: 'WidgetType',
  description: 'A type for the widget',

  fields: () => ({

    id: {
      type: GraphQLInt,
      description: 'id of the widget',
    },

    name: {
      type: GraphQLString,
      description: 'name of the widget',
    },

    description: {
      type: GraphQLString,
      description: 'description of the widget',
    },

    color: {
      type: GraphQLString,
      description: 'color of the widget',
    },

    size: {
      type: GraphQLString,
      description: 'size of the widget',
    },

    quantity: {
      type: GraphQLInt,
      description: 'quantity of the widget',
    },

  }),

});