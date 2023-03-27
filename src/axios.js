import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'http://localhost:8000', // 8000ポート：サーバーエンド、 3000ポート：フロントエンド
  headers: {
    "Access-Control-Allow-Methods": "POST,GET,PUT,DELETE",
    'Access-Control-Allow-Origin': '*'
  }
});

export default axios;