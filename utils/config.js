const NODE_ENV = 'test';
const config = {
  test: {
    API_ROOT: 'http://test.xxx.com:8010',
  },
  prod: {
    API_ROOT: 'https://api.xxx.com',
  },
};

module.exports = config[NODE_ENV];
