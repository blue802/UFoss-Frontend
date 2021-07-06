import { useEffect, useState } from 'react';
import { STATUS } from '../store/constant';
import API from '../utils/API';

const useCoursesByCategory = categoryName => {
  const [data, setData] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setStatus(STATUS.LOADING);
        const res = await API.get(`/categories/${categoryName}/courses`);
        setData(res.data);
        setStatus(STATUS.SUCCEEDED);
      } catch (error) {
        const message = error?.response?.data?.message;
        setError(message);
        setStatus(STATUS.FAILED);
      }
    }

    fetchData();
  }, [categoryName]);

  return [data, status, error];
};

export default useCoursesByCategory;
