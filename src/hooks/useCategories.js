import { useState, useEffect } from 'react';
import API from '../utils/API';

const useCategories = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await API.get('/categories');
        setData(res.data);
      } catch (error) {
        console.error(error.response?.data?.message);
      }
    }

    fetchData();
  }, []);

  return data;
};

export default useCategories;
