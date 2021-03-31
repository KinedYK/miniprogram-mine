const request = require('./request');

// 公共api
const apis = {
  /**
   * 例子
   * @param {*} params
   */
  test: (params) => {
    request.get('/api-mock/test/list').then((res) => {
      console.log(res);
    });
  },
};

module.exports = apis;
