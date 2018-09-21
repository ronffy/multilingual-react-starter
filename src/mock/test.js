const { Mock, config } = require('./common');
const { apiPre } = config
const localeCode = apiPre.split('/')[1];

let postId = 0
const data = Mock.mock({
  'data|10': [
    {
      id() {
        postId += 1
        return postId + 10000
      },
      title: localeCode === 'en' ? '@name' : '@cname',
    },
  ],
}).data

module.exports = {
  [`${apiPre}/_test`](req, res) {
    setTimeout(() => {
      res.json(data)
    }, 1000);
  },
}