import 'bootstrap-loader';
import '../scss/styles.scss';

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { List } from 'immutable';
import { Breadcrumb } from 'react-bootstrap';

class DemoApp extends React.Component {

  static propTypes = {
    trail: PropTypes.instanceOf(List),
  };

  render() {
    return <div className="row justify-content-center">
      <div className="col-12">
        <Breadcrumb>
          {this.props.trail.map((trailItem, i) => <Breadcrumb.Item key={i} href="#">
            {trailItem}
          </Breadcrumb.Item>)}
        </Breadcrumb>
      </div>
    </div>;
  }
}

let trail = List(['Home', 'Widget']);

trail = trail.push('Details');

ReactDOM.render(
  <DemoApp trail={trail} />, document.querySelector('main'));
