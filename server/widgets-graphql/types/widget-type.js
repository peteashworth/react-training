import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLID } from 'graphql';

export const widgetType = new GraphQLObjectType({

  name: 'WidgetType',
  description: 'A type for the widget',

  fields: () => ({

    id: {
      type: GraphQLID,
      description: 'id of the widget',
      // if resolve is omitted, this is the default implementation
      // resolve: (data, _1, _2, { fieldName }) => data[fieldName],
    },

    name: {
      type: GraphQLString,
      description: 'name of the widget',
    },

    description: {
      type: GraphQLString,
      description: 'description of the widget',
    }, // string

    color: {
      type: GraphQLString,
      description: 'color of the widget',
    }, // string

    size: {
      type: GraphQLString,
      description: 'size of the widget',
    }, // string

    quantity: {
      type: GraphQLInt,
      description: 'quantity of the widget',
    }, // int

  }),

});