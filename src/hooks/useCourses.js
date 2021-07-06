import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { STATUS } from '../store/constant';
import { fetchCourses, selectAllCourses } from '../store/courses/coursesSlice';

const useCourses = () => {
  const data = useSelector(selectAllCourses);
  const status = useSelector(state => state.courses.status);
  const error = useSelector(state => state.courses.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === STATUS.IDLE) {
      dispatch(fetchCourses());
    }
  }, [dispatch, status]);

  return [data, status, error];
};

export default useCourses;
