import React from 'react';

function AddProduct() {
  return <div>
  <div className="w-50 form-row ">
    <div className="col">
      <input type="text" className="form-control" placeholder="product name"/>
    </div>
    <div className="col">
      <input type="number" className="form-control" placeholder="product price"/>
    </div>
    <div className="col">
      <input type="text" className="form-control" placeholder="product image"/>
    </div>
    <div className="col">
      <input type="text" className="form-control" placeholder="product discription"/>
    </div >
    <br/>
    <div className='text-center'>
      <button className='btn btn-success'>Add Product</button>
    </div>

  </div>
  </div>
}

export default AddProduct;
