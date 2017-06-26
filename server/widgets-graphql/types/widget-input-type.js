import { GraphQLInputObjectType, GraphQLString, GraphQLInt } from 'graphql';

export const insertWidgetInputType = new GraphQLInputObjectType({

  name: 'InsertWidgetInputType',
  fields: () => ({
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    color: { type: GraphQLString },
    size: { type: GraphQLString },
    quantity: { type: GraphQLInt },
  }),

});