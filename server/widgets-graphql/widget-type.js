import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt } from 'graphql';

export const widgetType = new GraphQLObjectType({

  name: 'Widget',
  description: 'A widget object',
  fields: () => ({
    id: {
      type: GraphQLID,
      description: 'widget id',
    },
    name: {
      type: GraphQLString,
      description: 'widget name',
    },
    description: {
      type: GraphQLString,
      description: 'widget description',
    },
    color: {
      type: GraphQLString,
      description: 'widget color',
    },
    size: {
      type: GraphQLString,
      description: 'widget size',
    },
    quantity: {
      type: GraphQLInt,
      description: 'widget quantity',
    },
  }),

});