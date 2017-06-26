

export class BaseData {

  constructor(baseUrl, path) {
    this._baseUrl = baseUrl;
    this._path = path;
  }

  getCollectionURL() {
    return this._baseUrl + '/' + this._path;
  }

  getElementURL(elementId) {
    return this._baseUrl + '/' + this._path + '/' + elementId;
  }


}