import { useRouter } from 'next/router';
import { message } from 'antd';
import { useEffect } from 'react';

export default function Anime(){
  const {query} = useRouter();

  
  useEffect(() => {
    const success = () => {
      const hide = message.loading('Action in progress..', 0);
      // Dismiss manually and asynchronously
      setTimeout(hide, 1500);
    };
    success();  
  }, [])

  return (
    <>
      <h1>{query.slug}</h1>
    </>
  )
  
}