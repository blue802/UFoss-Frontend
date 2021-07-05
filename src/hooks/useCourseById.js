import { useEffect, useState } from 'react';

import API from '../utils/API';

const useCourseById = (category, courseId) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await API.get(
          `/categories/${category}/courses/${courseId}`
        );
        setData(res.data);
      } catch (error) {
        alert(error);
      }
    }

    fetchData();
  }, [category, courseId]);

  return data;
};

export default useCourseById;
