export class BaseData {

  constructor(baseUrl, path) {
    this._baseUrl = baseUrl + '/' + path;
  }

  getCollectionUrl() {
    return this._baseUrl;
  }

  getElementUrl(id) {
    return `${this._baseUrl}/${encodeURIComponent(id)}`;
  }

  getOptions(method, data) {
    return {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    };
  }
}