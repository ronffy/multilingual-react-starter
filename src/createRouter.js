/**
 * createRouter方法，根据不同的locale生成不同的router组件
 * @author ronffy
 */
import React from 'react';
import { Route, Switch, routerRedux, Redirect } from 'dva/router';
import dynamic from 'dva/dynamic'
import App from './routes/app';
import { LocaleProvider } from './components';
const { ConnectedRouter } = routerRedux;

function getRoutes(localeCode) {
  const routes = [
    {
      path: `/${localeCode}/home`,
      models: () => [import('./models/home')],
      component: () => import('./routes/home'),
    },
    {
      path: `/${localeCode}/_test`,
      models: () => [import('./models/_test')],
      component: () => import('./routes/_test'),
    },
  ]
  return routes;
}

function createRouter(locale) {
  return function Routers(e) {
    const { history, app } = e;
    const error = dynamic({
      app,
      component: () => import('./routes/error'),
    })
    const localeCode = locale.code;
    const routes = getRoutes(localeCode);
    return (
      <ConnectedRouter history={history}>
        <LocaleProvider locale={locale}>
          <App>
            <Switch>
              <Route exact path="/" render={() => (<Redirect to={`/${localeCode}/home`} />)} />
              <Route exact path={`/${localeCode}`} render={() => (<Redirect to={`/${localeCode}/home`} />)} />
              {
                routes.map(({ path, ...dynamics }, key) => (
                  <Route key={key}
                    exact
                    path={path}
                    component={dynamic({
                      app,
                      ...dynamics,
                    })}
                  />
                ))
              }
              <Route component={error} />
            </Switch>
          </App>
        </LocaleProvider>
      </ConnectedRouter>
    );
  }
}

export default createRouter;
