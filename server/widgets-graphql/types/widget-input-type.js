import { GraphQLInputObjectType, GraphQLString, GraphQLInt } from 'graphql';

const fields = () => ({
  name: { type: GraphQLString },
  description: { type: GraphQLString },
  color: { type: GraphQLString },
  size: { type: GraphQLString },
  quantity: { type: GraphQLInt },
});

export const insertWidgetInputType = new GraphQLInputObjectType({
  name: 'InsertWidgetInputType',
  description: 'Input type for inserts',
  fields,
});

export const replaceWidgetInputType = new GraphQLInputObjectType({
  name: 'ReplaceWidgetInputType',
  description: 'Input type for replacements',
  fields: () => Object.assign(fields(), { id: { type: GraphQLInt } }),
});

