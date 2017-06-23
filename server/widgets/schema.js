import {GraphQLSchema, GraphQLObjectType, GraphQLID} from 'graphql';

export const schema = new GraphQLSchema({
  query: new GraphQLObjectType({

    name: 'Query',
    fields: () => ({
      viewer: {
        type: GraphQLID,
        resolve: () => 1
      }
    })
  })
});