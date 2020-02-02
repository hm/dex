import React, { FunctionComponent } from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import Dashboard from './views/Dashboard';
import { createBrowserHistory } from 'history';
import { createGlobalStyle } from 'styled-components'
import { CurrentTheme, IThemes } from './themes/CurrentTheme';

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    background-color: ${(props: any) => props.theme.colors.backgroundColor};
  }
`

const RootContainer: FunctionComponent = () => {
  return (
    <CurrentTheme theme={IThemes.dark}>
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
}

export default RootContainer;
