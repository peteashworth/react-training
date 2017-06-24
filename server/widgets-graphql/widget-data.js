import fetch from 'node-fetch';

export class WidgetData {

  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  async all() {

    const res = await fetch(this._baseUrl);
    return await res.json();
  }

}