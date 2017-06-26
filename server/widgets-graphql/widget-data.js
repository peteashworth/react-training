import fetch from 'node-fetch';

import { BaseData } from '../models/base-data';

export class WidgetData extends BaseData {

  constructor(baseUrl) {
    super(baseUrl, 'widgets');
  }

  all() {
    return fetch(this.getCollectionURL())
      .then(res => res.json());
  }

  one(widgetId) {
    return fetch(this.getElementURL(widgetId))
      .then(res => res.json());
  }

  insert(widget) {
    return fetch(this.getCollectionURL(), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(widget),
    })
      .then(res => res.json());
  }
}