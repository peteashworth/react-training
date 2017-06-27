import { GraphQLObjectType, GraphQLInt } from 'graphql';

import { WidgetData } from '../../models/widget-data';
import { CarData } from '../../models/car-data';

import { insertWidgetInputType, replaceWidgetInputType } from './widget-input-type';
import { widgetType } from './widget-type';

import { insertCarInputType, replaceCarInputType } from './car-input-type';
import { carType } from './car-type';

// homework

// add the code to add a car to the rest service through a GraphQL mutation query

export const mutation = new GraphQLObjectType({

  name: 'Mutation',

  fields: () => ({

    // GraphQL Mutation Query
    // mutation InsertWidget($insertWidget: InsertWidgetInputType) {
    //   insertWidget(widget: $insertWidget) {
    //     id
    //     name
    //   }
    // }    

    // GraphQL Query Variables
    // {
    //   "insertWidget": {
    //     "name": "Bob",
    //     "description": "Bob is cool",
    //     "color": "blue",
    //     "size": "small",
    //     "quantity": 12
    //   }
    // }

    // function name
    insertWidget: {
      // function params
      args: {
        widget: {
          type: insertWidgetInputType,
        }
      },
      // function return value
      type: widgetType,
      resolve: (_, { widget }, { baseUrl }) => {
        const widgetData = new WidgetData(baseUrl);
        return widgetData.insert(widget);
      }
    },

    // function name
    replaceWidget: {
      // function params
      args: {
        widget: {
          type: replaceWidgetInputType,
        }
      },
      // function return value
      type: widgetType,
      resolve: (_, { widget }, { baseUrl }) => {
        const widgetData = new WidgetData(baseUrl);
        return widgetData.replace(widget);
      }
    },

    // function name
    deleteWidget: {
      // function params
      args: {
        widgetId: {
          type: GraphQLInt,
        }
      },
      // function return value
      type: widgetType,
      resolve: (_, { widgetId }, { baseUrl }) => {
        const widgetData = new WidgetData(baseUrl);
        return widgetData.one(widgetId).then(widgetToDelete => widgetData.delete(widgetId).then(() => widgetToDelete));
      }
    },

    // mutation InsertCar($insertCar: InsertCarInputType) {
    //   insertCar(car: $insertCar) {
    //     id
    //     make
    //     model
    //   }
    // }

    // {
    //   "insertCar": {
    //     "make": "Tesla",
    //     "model": "S",
    //     "year": 2014,
    //     "color": "red",
    //     "price": 20000
    //   }
    // }    

    // function name
    insertCar: {
      // function params
      args: {
        car: {
          type: insertCarInputType,
        }
      },
      // function return value
      type: carType,
      resolve: (_, { car }, { baseUrl }) => {
        const carData = new CarData(baseUrl);
        return carData.insert(car);
      }
    },

    // mutation ReplaceCar($replaceCar: ReplaceCarInputType) {
    //   replaceCar(car: $replaceCar) {
    //     id
    //     make
    //     model
    //     year
    //   }
    // }

    // {
    //   "replaceCar": {
    //     "id": 3,
    //     "make": "Tesla",
    //     "model": "S",
    //     "year": 2016,
    //     "color": "red",
    //     "price": 20000
    //   }
    // }    

    // function name
    replaceCar: {
      // function params
      args: {
        car: {
          type: replaceCarInputType,
        }
      },
      // function return value
      type: carType,
      resolve: (_, { car }, { baseUrl }) => {
        const carData = new CarData(baseUrl);
        return carData.replace(car);
      }
    },

    // mutation DeleteCar($deleteCarId: Int) {
    //   deleteCar(carId: $deleteCarId) {
    //     id
    //     make
    //     model
    //     year
    //   }
    // }

    // {
    //   "deleteCarId": 3
    // }

    // function name
    deleteCar: {
      // function params
      args: {
        carId: {
          type: GraphQLInt,
        }
      },
      // function return value
      type: carType,
      resolve: (_, { carId }, { baseUrl }) => {
        const carData = new CarData(baseUrl);
        return carData.one(carId).then(carToDelete => carData.delete(carId).then(() => carToDelete));
      }
    },

  }),

});