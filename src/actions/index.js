import axios from 'axios';

axios.defaults.baseURL = 'http://192.168.11.138:3000';
axios.defaults.headers.post['Content-Type'] = 'application/json';

export * from './insertCustAction';
export * from './listCustActions';