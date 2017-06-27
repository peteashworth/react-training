import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLFloat } from 'graphql';

export const carType = new GraphQLObjectType({

  name: 'CarType',
  description: 'A type for cars',
  fields: () => ({
    id: { type: GraphQLInt },
    make: { type: GraphQLString },
    model: { type: GraphQLString },
    year: { type: GraphQLInt },
    color: { type: GraphQLString },
    price: { type: GraphQLFloat },
  }),

});