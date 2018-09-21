import createDva from './createDva';

createDva({
  localeCode: 'th',
  routerSync(app) {
    app.router(require('./router_th').default);
  }
})
