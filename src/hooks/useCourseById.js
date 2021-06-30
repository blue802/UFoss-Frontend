import { useEffect, useState } from 'react';
import axios from 'axios';

import API from '../utils/API';

const useCourseById = courseId => {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get('/api/courses/' + courseId);
        setData(res.data.course);
      } catch (error) {
        alert(error);
      }
    }

    fetchData();
  }, [courseId]);

  return data;
};

export default useCourseById;
