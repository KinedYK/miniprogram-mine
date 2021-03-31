const NODE_ENV = 'test';
const config = {
  test: {
    API_ROOT: 'https://www.fastmock.site/mock/6ff5dc7c26e54825c4418249d6a0beff',
  },
  prod: {
    API_ROOT: 'https://api.xxx.com',
  },
};

module.exports = config[NODE_ENV];
