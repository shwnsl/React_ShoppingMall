import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const fetchProducts = () => {
    return fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
}


const ProductList = () => {
    const { data, error, isLoading } = useQuery({
        queryKey: ["products"],
        queryFn: fetchProducts
    });

    const [productId, setProductId] = useState("");
    const navigate = useNavigate();

    const goToInfo = (e) => {
        setProductId(e.target.id);
    }

    useEffect(() => {
        navigate(`/product/${productId}`)
    },[productId])

    if(isLoading) {
        return <div>Loading...</div>
    }

    if(error) return <p>Error : {error.message}</p>

    return (
        <div className='product_list'>
            {
                data.map((product) => (
                    <div className='items' id={product.id} onClick={goToInfo}>
                        <p>{product.title}</p>
                        <p>Name : {product.title}</p>
                        <img src={product.image}/>
                        <p>Price : {product.price}$</p>
                        <p>Category : {product.category}</p>
                        <p>Description : {product.description}</p>
                        <p>
                            Rating : <span>{product.rating.rate}</span> / <span>{product.rating.count}</span>
                        </p>
                    </div>
                ))
            }
        </div>
    );
};

export default ProductList;