import { useEffect, useState } from 'react';
import { STATUS } from '../store/constant';
import API from '../utils/API';

const  useRate= (userId,courseId,score,category) =>{

    useEffect(() => {
        async function postData() {
            await API.post(`/categories/${category}/courses/${courseId}/rate`,{score,userId});
        }
        postData();
      });
}

export default useRate
