export class BaseDataClient {

  constructor(serverUrl) {
    this._serverUrl = serverUrl;
  }

  _request = (query, variables, operationName) => {

    const body = JSON.stringify({
      query,
      variables,
      operationName
    });

    return fetch(this._serverUrl, {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body,
    }).then(res => res.json()).then(results => results.data);
  }

}