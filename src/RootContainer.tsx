import React, { FunctionComponent } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import { createBrowserHistory } from 'history';
import { createGlobalStyle } from 'styled-components'
import { CurrentTheme } from './themes/CurrentTheme';
import { Session } from 'stores/session';
import { observer } from 'mobx-react';
const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${(props: any) => props.theme.colors.backgroundColor};
  }
`

const RootContainer: FunctionComponent = observer(() => {
  const session = new Session();
  return (
    <CurrentTheme theme={session.currentTheme}>
      <>
        <GlobalStyles />
        <Router history={createBrowserHistory()}>
          <Switch>
            <Route component={Dashboard} />
          </Switch>
        </Router>
      </>
    </CurrentTheme>
  );
})

export default RootContainer;
