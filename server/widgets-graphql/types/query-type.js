import { GraphQLObjectType, GraphQLList, GraphQLInt } from 'graphql';

import { WidgetData } from '../../models/widget-data';
import { CarData } from '../../models/car-data';

import { widgetType } from './widget-type';
import { carType } from './car-type';

export const query = new GraphQLObjectType({

  name: 'Query',
  description: 'Query endpoint for my GraphQL server',

  fields: () => ({
    widgets: {
      type: new GraphQLList(widgetType),
      description: 'A list of widgets',
      resolve: (_1, _2, { baseUrl }) => {
        const widgetData = new WidgetData(baseUrl);
        return widgetData.all();
      },
    },
    widget: {
      type: widgetType,
      description: 'A single widgets',
      args: {
        widgetId: {
          type: GraphQLInt,
          description: 'The id of the widget to load',
        }
      },
      resolve: (_, { widgetId }, { baseUrl }) => {
        const widgetData = new WidgetData(baseUrl);
        return widgetData.one(widgetId);
      },
    },
    cars: {
      type: new GraphQLList(carType),
      description: 'A list of cars',
      resolve: (_1, _2, { baseUrl }) => {
        const carData = new CarData(baseUrl);
        return carData.all();
      },
    },
    car: {
      type: carType,
      description: 'A single cars',
      args: {
        carId: {
          type: GraphQLInt,
          description: 'The id of the car to load',
        }
      },
      resolve: (_, { carId }, { baseUrl }) => {
        const carData = new CarData(baseUrl);
        return carData.one(carId);
      },
    }
  }),
});