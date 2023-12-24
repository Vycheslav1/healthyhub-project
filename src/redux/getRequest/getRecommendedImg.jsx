import axios from 'axios';
axios.defaults.baseURL = 'https://healthy-hub-2d3x.onrender.com/api';

export const getRecommendedImage = async (count) => {
  try {
    const res = await axios.get('/recommended-food', {
      params: {
        count: count,
      },
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    });
    return res.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
