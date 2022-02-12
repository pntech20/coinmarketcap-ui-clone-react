import API from '../api';
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getAllUsers() {
    return API.get(`https://jsonplaceholder.typicode.com/users`);
  },
  getConsoleLog(msg) {
    console.log('Hello World', msg);
  },
};
