import fetch from 'node-fetch';

export class WidgetData {

  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  async all() {
    // return fetch(this._baseUrl).then(res => res.json());
    const res = await fetch(this._baseUrl);
    return await res.json();
  }

}