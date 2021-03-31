const BASE_URL = require('./config').API_ROOT;

const options_def = {
  header: {
    'access-token': wx.getStorageSync('access-token'),
  },
};

function onSeverError(code) {
  wx.showToast({
    title: `服务器错误: ${code}`,
    icon: 'none',
    duration: 2000,
  });
}

function isHttpSuccess(status) {
  console.log(status);
  return (status >= 200 && status < 300) || status === 304;
}

const request = {
  http: (url, method, data = {}, options = {}) => {
    options = Object.assign(options, options_def);
    return new Promise((resolve, reject) => {
      wx.request({
        data,
        method,
        url: `${BASE_URL}${url}`,
        header: options.header,
        success(res) {
          const isSuccess = isHttpSuccess(res.statusCode);
          if (isSuccess) {
            resolve(res.data);
          } else {
            // TODO: 错误处理
            onSeverError(res.statusCode);
          }
        },
        fail(err) {
          reject(err);
        },
      });
    });
  },
  post: (url, data = {}, options = {}) => request.http(url, 'POSt', data, options),
  get: (url, data = {}, options = {}) => request.http(url, 'GET', data, options),
};

module.exports = request;
