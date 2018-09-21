/**
 * test测试、demo，不会到生产
 * @author ronffy
 */
import { commonExtend } from './common';
import { query } from '../services/_test';

const LOCALE_CODE = process.env.LOCALE_CODE;

export default commonExtend({

  namespace: '_test',

  state: {
    list: []
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
      history.listen(({ pathname }) => {
        if (pathname === `/${LOCALE_CODE}/_test`) {
          dispatch({ type: 'fetch' });
        }
      })
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      let { data } = yield call(query);
      yield put({ 
        type: 'updateState',
        payload: {
          list: data
        }
      })
    },
  },

});
