import { BaseDataClient } from './base-data-client';

export class WidgetDataClient extends BaseDataClient {

  constructor(serverUrl) {
    super(serverUrl);
  }

  all() {
    return this._request(
      `query AllWidgets {
        widgets {
          id name description color size quantity
        }
      }`,
      null,
      'AllWidgets'
    );
  }

  one(widgetId) {
    return this._request(
      `query OneWidget($widgetId: Int) {
        widget(widgetId: $widgetId) {
          id name description color size quantity
        }
      }`,
      { widgetId },
      'OneWidget'
    );
  }

  insert(widget) {
    return this._request(
      `mutation InsertWidget($widget: InsertWidgetInputType) {
        insertWidget(widget: $widget) {
          id name description color size quantity
        }
      }`,
      { widget },
      'InsertWidget'
    );
  }

  replace(widget) {
    return this._request(
      `mutation ReplaceWidget($widget: ReplaceWidgetInputType) {
        replaceWidget(widget: $widget) {
          id name description color size quantity
        }
      }`,
      { widget },
      'ReplaceWidget'
    );
  }

  delete(widgetId) {
    return this._request(
      `mutation DeleteWidget($widgetId: Int) {
        deleteWidget(widgetId: $widgetId) {
          id name description color size quantity
        }
      }`,
      { widgetId },
      'DeleteWidget'
    );
  }

}