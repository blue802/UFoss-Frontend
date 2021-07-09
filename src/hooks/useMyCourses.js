import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { STATUS } from '../store/constant';
import { fetchMyCourses, selectMyCourses } from '../store/myCourses/myCourseSlice';
import { useAuth } from '../services/auth.service';

const useMyCourses = () => {
  const [profile] = useAuth();

  const dispatch = useDispatch();
  const myCourse = useSelector(selectMyCourses);
  const status = useSelector(state => state.myCourses.status);
  const error = useSelector(state => state.myCourses.error);

  useEffect(() => {
    if (status === STATUS.IDLE) {
      dispatch(fetchMyCourses(profile.id));
    }
  }, [dispatch, profile.id, status]);

  return [myCourse, status, error];
}
export default useMyCourses;