import { useEffect, useRef, useState } from 'react';
import { ProductData } from '../../ui/components/Product';
import axios from 'axios';

const useApi = () => {
  const [data, setData] = useState<any[]>([]);
  const [page, setPage] = useState(0);
  // for demonstration purposes, the types of filtering accepted are: default, ascendant, descendant, lowestToHighest, highestToLowest
  const [order, setOrder] = useState('default');
  const [loading, setLoading] = useState(false);
  const loadingRef = useRef(loading);
  loadingRef.current = loading;

  useEffect(() => {
    if (loadingRef.current) {
      return;
    }
    axios.get<any[]>(`http://127.0.0.1:3163/product/getProducts?order=${order}`)
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
