import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useAxios = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [error, setError] = useState();
  
  useEffect(() => {
    setLoading(true);
    axios.get(url)
      .then((data) => setData(data))
      .catch((err) => setError(err))
      .finally(() => setLoading(false))
  }, [url]);

  return [loading, data, error];
}

export default useAxios;