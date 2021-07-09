import React, { useEffect, useState } from 'react'
import API from '../utils/API';

function usePagination(category,pageNumber,size) {
    const [data, setData] = useState(null);

    useEffect(() => {
      async function fetchData() {
        try {
          const res = await API.get(
            `/categories/${category}/courses?page=${pageNumber}&size=${size}`
          );
          setData(res.data);
        } catch (error) {
          alert(error);
        }
      }
  
      fetchData();
    }, [pageNumber]);
  
    return data;
}

export default usePagination
