import fetch from 'node-fetch';

import { BaseData } from '../models/base-data';

export class WidgetData extends BaseData {

  constructor(baseUrl) {
    super(baseUrl, 'widgets');
  }

  async all() {
    const res = await fetch(this.getCollectionUrl());
    return await res.json();
  }

  async one(widgetId) {
    const res = await fetch(this.getElementUrl(widgetId));
    return await res.json();
  }

  async insert(widget) {
    const res = await fetch(this.getCollectionUrl(), this.getOptions('POST', widget));
    return await res.json();
  }

  async update(widget) {
    const res = await fetch(this.getElementUrl(widget.id), this.getOptions('PUT', widget));
    return await res.json();
  }

  async delete(widgetId) {
    const res = await fetch(this.getElementUrl(widgetId), { method: 'DELETE' });
    return await res.json();
  }

}