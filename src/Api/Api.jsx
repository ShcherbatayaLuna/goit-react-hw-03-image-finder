import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/?';
const API_KEY = '30388483-557dbc66a250e34d9c6a3fc57';

const Api = async (query, page) => {
  try {
    const response = await axios.get('', {
      params: {
        key: API_KEY,
        q: query,
        page,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 12,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export default Api;
