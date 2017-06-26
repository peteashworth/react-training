import { GraphQLInputObjectType, GraphQLString, GraphQLInt, GraphQLID } from 'graphql';

const fields = () => ({
  name: { type: GraphQLString },
  description: { type: GraphQLString },
  color: { type: GraphQLString },
  size: { type: GraphQLString },
  quantity: { type: GraphQLInt },
});

export const insertWidgetInputType = new GraphQLInputObjectType({

  name: 'InsertWidgetType',
  description: 'insert widget type',
  fields,

});

export const updateWidgetInputType = new GraphQLInputObjectType({

  name: 'UpdateWidgetType',
  description: 'update widget type',
  fields: () => Object.assign(fields(), { id: { type: GraphQLID } }),

});

export const deleteWidgetInputType = new GraphQLInputObjectType({

  name: 'DeleteWidgetType',
  description: 'delete widget type',
  fields: () => ({
    id: { type: GraphQLID },
  }),

});