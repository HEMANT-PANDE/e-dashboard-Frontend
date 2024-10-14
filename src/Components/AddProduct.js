import React from "react";

const AddProduct = () =>{
  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [company, setCompany] = React.useState('');
  const [error , setError] = React.useState(false);

  const addProduct = async () =>{
        
  if(!name || !price || !category || !company){
    setError(true);
    return false;
  }
    console.warn(name,price,category,company);
    const userId = JSON.parse(localStorage.getItem('user'))._id;
    let result = await fetch("http://localhost:3000/add-product",{
      method:'post',
      body:JSON.stringify({name , price , category, company , userId}),
      headers:{
        "Content-Type":"application/json"
      }
    });
    result = await result.json();
    console.warn(result);
  }

  return (
    <div className="product">
      <h1>Add Product</h1>
      <input
        type="text"
        placeholder="Enter Product Name"
        className="inputBox" value={name}
        onChange={(e) => {setName(e.target.value)}} />
        <span>Enter valid Name</span>
      <input
        type="text"
        placeholder="Enter Product Price"
        className="inputBox" value={price}
        onChange={(e) => {setPrice(e.target.value)}} />
      <input
        type="text"
        placeholder="Enter Product Category"
        className="inputBox" value={category} onChange={(e) => {setCategory(e.target.value)}} />
      <input
        type="text"
        placeholder="Enter Product Company"
        className="inputBox" value={company} onChange={(e) => {setCompany(e.target.value)}}
      />
      <button onClick={addProduct} className="appButton">Add Product</button>
    </div>
  );
}

export default AddProduct;