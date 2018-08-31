import React, { PureComponent } from 'react';
import { Link,Switch,Redirect,Route, withRouter } from 'react-router-dom';
import { AuthorizeProvider } from 'components/AuthorizeProvider';
import Public from "../Public"
import PrivateRoute from "../PrivateRoute"
import Login from "../Login"
export class App extends PureComponent {
  render() {
    return (
      <AuthorizeProvider>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/login">Войти</Link>
              </li>
              <li>
                <Link to="/private"> Секретная страница</Link>
              </li>
              <li>
                <Link to="/"> Главная</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
          <Switch>
            <Route path="/" exact component={Public}></Route>
            <Route path="/private" component={PrivateRoute}></Route>
            <Route path="/login" component={Login}></Route>
            <Redirect to="/public"></Redirect>
          </Switch>
        </div>
      </AuthorizeProvider>
    );
  }
}

// это важно!
// необходимо использовать этот хок(withRouter), потому что при использовании нескольких контекстов
// реакт-роутер теряет свой контекст. Причина — использование старого апи.
export default withRouter(App);
