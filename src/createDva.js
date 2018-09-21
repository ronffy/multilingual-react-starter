/**
 * createDva方法，根据不同的locale生成不同的dva实例
 * @author ronffy
 */
import dva from 'dva';
import createLoading from 'dva-loading'
import createHistory from 'history/createBrowserHistory'
import 'babel-polyfill'
import './index.less';

export default function createDva({ localeCode, routerSync }) {

  // 1. Initialize
  const app = dva({
    initialState: {
      app: {
        localeCode,
      }
    },
    history: createHistory(),
    onStateChange(state) {
      window.__state__ = state;
    },
    onError(error) {
      // console.error(`全局error: ${error}`);
    },
  });

  // 2. Plugins
  app.use({
    ...createLoading({
      effects: true,
    }),
  });

  // 3. Model
  app.model(require('./models/app').default);
  
  // 4. RouterSync
  routerSync(app);

  // 5. Start
  app.start('#root');
}
