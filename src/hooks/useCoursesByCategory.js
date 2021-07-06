import { useEffect, useState } from 'react';
import { STATUS } from '../store/constant';
import API from '../utils/API';

const useCoursesByCategory = (category, query) => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setStatus(STATUS.LOADING);
        const res = await API.get(`/categories/${category}/courses?${query}`);
        setData(res.data);
        setStatus(STATUS.SUCCEEDED);
      } catch (error) {
        const message = error?.response?.data?.message;
        setError(message);
        setStatus(STATUS.FAILED);
      }
    }

    fetchData();
  }, [category, query]);

  return [data, status, error];
};

export default useCoursesByCategory;
