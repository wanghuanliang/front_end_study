import React from 'react';
import useAxios  from './customHooks/useAxios';

const CustomHooks = () => {
  const url = 'http://localhost:3002';
  const [loading, data, error] = useAxios(url);

  return (
    <div>
      {loading && <div>loading</div>}
      {data ? <div>{JSON.stringify(data)}</div> : <div>{JSON.stringify(error)}</div>}
    </div>
  )
}

export default CustomHooks;