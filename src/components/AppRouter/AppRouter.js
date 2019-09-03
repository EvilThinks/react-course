import React, { PureComponent } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import  Search  from '../Search';
import  ShowPage from '../ShowPage';

class AppRouter extends PureComponent {
  render() {
    return (
      <div className="App" style={{textAlign:"center"}}>
        <Switch>
          <Route path="/" exact component={Search}></Route>
          <Route path="/shows/:id" component={ShowPage}></Route>
        </Switch>
      </div>
    );
  }
}

export default withRouter(AppRouter);
