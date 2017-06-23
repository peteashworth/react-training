import 'bootstrap-loader';
import '../scss/styles.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Jumbotron } from 'react-bootstrap';

class HelloWorld extends React.Component {

  render() {
    return <div className="row justify-content-center">
      <div className="col-8 col-offset-2">
        <Jumbotron className="center-block">
          <h1>Welcome to Class!</h1>
          <p>A starter project for creating React/Redux/GraphQL/Relay applications!</p>
        </Jumbotron>
      </div>
    </div>;
  }
}

ReactDOM.render(
  <HelloWorld />, document.querySelector('main'));
