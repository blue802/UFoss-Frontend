import { useEffect, useState } from 'react';
import { STATUS } from '../store/constant';

import API from '../utils/API';

const useCourseById = (category, courseId) => {
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setStatus(STATUS.LOADING);
        const res = await API.get(
          `/categories/${category}/courses/${courseId}`
        );
        setData(res.data);
        setStatus(STATUS.SUCCEEDED);
      } catch (error) {
        const message = error?.response?.data?.message;
        setError(message);
        setStatus(STATUS.FAILED);
      }
    }

    if (status === STATUS.IDLE) {
      fetchData();
    }
  }, [category, courseId, status]);

  return [data, status, error];
};

export default useCourseById;
