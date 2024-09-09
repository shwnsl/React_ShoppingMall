import { useQuery } from '@tanstack/react-query';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const fetchProductLists = (productId) => {
    return fetch(`https://fakestoreapi.com/products/${productId}`)
    .then((response) => response.json())
}

const ProductInfo = () => {
    const {productId} = useParams();
    const { data, error, isLoading } = useQuery({
        queryKey: ["product", productId],
        queryFn:() => fetchProductLists(productId)
    });

    if (isLoading) {
        return <div>Loading product details...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className='details'>
            <h1>{data.title} Detail</h1>
            <img src={data.image} />
            <p className='price'>{data.price}$</p>
            <p>Category : {data.category}</p>
            <p>Description : {data.description}</p>
            <p className='rate'>
                Rating : <span>{data.rating.rate}</span> / <span>{data.rating.count}</span>
            </p>
        </div>
    );
};

export default ProductInfo;