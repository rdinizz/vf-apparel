import { useEffect, useRef, useState } from 'react';
import { ProductData } from '../../ui/components/Product';
import axios from 'axios';


// custom hook example of state management and can be reusable in different components
const useApi = () => {
  const [data, setData] = useState<any[]>([]);
  const [page, setPage] = useState(0);
  const [order, setOrder] = useState('default');
  const [loading, setLoading] = useState(false);
  const loadingRef = useRef(loading);
  loadingRef.current = loading;

  useEffect(() => {
    if (loadingRef.current) {
      return;
    }
    const serverURL = process.env.EXPO_PUBLIC_SERVER_URL || '127.0.0.1:3163'
    axios.get<any[]>(`http://${serverURL}/product/getProducts?order=${order}`)
    .then(response => {
      setData(response.data);
    }).catch(error => console.log(error.message))
  }, [order]);

  const fetchMoreData = () => {
    // in case we want to add pagination, we can just increase the page and add an useEffect with page as dependency
    // and call the api with the increased page
    setPage(page + 1);
  };

  return { data, order, setOrder };
};

export default useApi;
