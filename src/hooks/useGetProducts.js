import {useState, useEffect} from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
    // hooks del state
    const [products, setProducts] = useState([]);

    useEffect( async () => {
        const response = await axios(API);
        setProducts(response.data);
        console.log(response.data);
    }, [])

    return products;
}

export default useGetProducts;
