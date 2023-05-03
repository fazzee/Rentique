import axios from 'axios';

const mockApi = {
  login: async (username, password) => {
    try {
      const response = await axios.post('/api/login', { username, password });
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  }
};

export default mockApi;
