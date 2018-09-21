import createDva from './createDva';

createDva({
  localeCode: 'cn',
  routerSync(app) {
    app.router(require('./router_cn').default);
  }
})