import React, { PureComponent } from 'react';
import { AuthHOC } from 'components/AuthorizeProvider';
import {Redirect} from 'react-router-dom';
import Private from '../Private';

class PrivateRoute extends PureComponent {
  render() {
    return this.props.isAuthorized ? Private() : <Redirect to="/login" />;
  }
}

export default AuthHOC(PrivateRoute);
