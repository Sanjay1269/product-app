import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

function Products() {
    const [products, setproducts] = useState([]);
    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = async () => {
        const url = 'https://ty-shop.herokuapp.com/api/products'
        try {
            const response = await axios.get(url)
            console.log(response);
            console.log(response.data);
            setproducts(response.data.products)
        } catch (err) {
            console.log(err);
        }
    }
    const deleteProduct = (productId) => {
        console.log(productId);
        const url = `https://ty-shop.herokuapp.com/api/products/${productId}`
        try{
            const responce = axios.delete(url)
            console.log(responce.data);
           /*  const productsCopy = [...products]
            const filterProducts = productsCopy.filter((prod) => {
                return prod._id !== productId
            })
            setproducts(filterProducts) */
            // OR
            fetchProducts()
        }catch(err){
            console.log(err);
        }
    }
    return <div>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Product Name</th>
                    <th>Product Price</th>
                    <th>Image</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {products.length > 0 && products.map((product) => {
                    return <tr key={product._id}>
                        <td>{product._id}</td>
                        <td>{product.productName}</td>
                        <td>{product.productPrice}</td>
                        <td><img style={{
                            width:'50px',
                            height:'50px'
                        }} src={product.productImageURL} /></td>
                        <td>{product.productDescription}</td>
                        <td><button className="btn btn-primary m-2">Edit</button>
                        <button onClick={() => {
                            deleteProduct(products._id)
                        }} className='btn btn-danger m-2'>Delete</button>
                        </td>
    

                    </tr>
                })}

            </tbody>
        </Table>
    </div>;
}

export default Products;