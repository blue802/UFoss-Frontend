import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCourses, selectAllCourses } from '../store/courses/coursesSlice';

const useCourses = () => {
  const data = useSelector(selectAllCourses);
  const status = useSelector(state => state.courses.status);
  const error = useSelector(state => state.courses.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchCourses());
    }
  }, [dispatch, status]);

  return [data, status, error];
};

export default useCourses;
