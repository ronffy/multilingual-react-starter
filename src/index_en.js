import createDva from './createDva';

createDva({
  localeCode: 'en',
  routerSync(app) {
    app.router(require('./router_en').default);
  }
})
