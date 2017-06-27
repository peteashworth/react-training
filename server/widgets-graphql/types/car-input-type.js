import { GraphQLInputObjectType, GraphQLString, GraphQLInt, GraphQLFloat } from 'graphql';

const fields = () => ({
  make: { type: GraphQLString },
  model: { type: GraphQLString },
  year: { type: GraphQLInt },
  color: { type: GraphQLString },
  price: { type: GraphQLFloat },
});

export const insertCarInputType = new GraphQLInputObjectType({
  name: 'InsertCarInputType',
  description: 'Input type for inserts',
  fields,
});

export const replaceCarInputType = new GraphQLInputObjectType({
  name: 'ReplaceCarInputType',
  description: 'Input type for replacements',
  fields: () => Object.assign(fields(), { id: { type: GraphQLInt } }),
});

