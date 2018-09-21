
const LOCALE_CODE = process.env.LOCALE_CODE;

let apiPre = `/${LOCALE_CODE}/api/v1`;
// let apiPre = 'https://zlcx.sunlands.wang';

// if (process.env.NODE_ENV === 'development') {
//   apiPre = 'https://testboss.sunlands.wang';
// }

const apis = {
  exam: `${apiPre}/adcampaign/exam`, // 题库
  _test: `${apiPre}/_test`, // 题库
}

const CORS = [apiPre];

export {
  apiPre,
  apis,
  CORS,
}
