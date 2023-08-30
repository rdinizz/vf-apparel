import { useEffect, useRef, useState } from 'react';
import { ProductData } from '../../ui/components/Product';
import axios from 'axios';

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
    axios.get<any[]>(`http://127.0.0.1:3163/product/getProducts?order=${order}`)
    .then(response => {
      console.log(response.data)
      setData(response.data);
    }).catch(error => console.log(error.message))
  }, [order]);

  const fetchMoreData = () => {
    setPage(page + 1);
  };


  return { data, order, setOrder };
};

export default useApi;


const TEMP_DATA = [
  {
    "id": 10822924041,
    "title": "Play On Player Women's Tee",
    "variants": [
      {
        "id": 45096030669,
        "title": "White / Small",
        "featured_image": {
          "id": 27344035469,
          "width": 1200,
          "height": 1200,
          "src": "https://cdn.shopify.com/s/files/1/0797/7413/products/brand-playon-wtee-white.jpg?v=1571439345",
        },
        "price": "20.00",
        "position": 1,
        "product_id": 10822924045,
      },
      {
        "id": 45096030733,
        "title": "White / Medium",
        "featured_image": {
          "id": 27344035469,
          "width": 1200,
          "height": 1200,
          "src": "https://cdn.shopify.com/s/files/1/0797/7413/products/brand-playon-wtee-white.jpg?v=1571439345",
        },
        "price": "20.00",
        "position": 2,
      },
    ]
  },
  {
    "id": 10822924045,
    "title": "Play On Player Women's Tee 2",
    "variants": [
      {
        "id": 45096030669,
        "title": "White / Small",
        "featured_image": {
          "id": 27344035469,
          "width": 1200,
          "height": 1200,
          "src": "https://cdn.shopify.com/s/files/1/0797/7413/products/brand-playon-wtee-white.jpg?v=1571439345",
        },
        "price": "20.00",
        "position": 1,
        "product_id": 10822924045,
      },
      {
        "id": 45096030733,
        "title": "White / Medium",
        "featured_image": {
          "id": 27344035469,
          "width": 1200,
          "height": 1200,
          "src": "https://cdn.shopify.com/s/files/1/0797/7413/products/brand-playon-wtee-white.jpg?v=1571439345",
        },
        "price": "30.00",
        "position": 2,
      },
    ]
  },
  {
    "id": 10822924046,
    "title": "Play On Player Women's Tee 3",
    "variants": [
      {
        "id": 45096030669,
        "title": "White / Small",
        "featured_image": {
          "id": 27344035469,
          "width": 1200,
          "height": 1200,
          "src": "https://cdn.shopify.com/s/files/1/0797/7413/products/brand-playon-wtee-white.jpg?v=1571439345",
        },
        "price": "25.00",
        "position": 1,
        "product_id": 10822924045,
      },
      {
        "id": 45096030733,
        "title": "White / Medium",
        "featured_image": {
          "id": 27344035469,
          "width": 1200,
          "height": 1200,
          "src": "https://cdn.shopify.com/s/files/1/0797/7413/products/brand-playon-wtee-white.jpg?v=1571439345",
        },
        "price": "20.00",
        "position": 2,
      },
    ]
  },
]
