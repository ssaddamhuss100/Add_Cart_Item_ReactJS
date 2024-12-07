import React, { useState } from 'react';
import ProductList from './Components/ProductList';
import Footer from './Components/Footer';
import AddItem from './Components/AddItem';
import Navbar from './Components/Navbar';

function App() {
  // Create the product list with initial values
  const initialProductList = [
    { name: "IPhone 10s Max", price: 140434, quantity: 0 },
    { name: "Real Me 10X", price: 10000, quantity: 2 },
  ];

  const [productList, setProductList] = useState(initialProductList);
  const [totalAmount, setTotalAmount] = useState(0);

  // Increment the quantity of a product (limit between 1 and 100)
  const incrementQuantity = (index) => {
    const newProductList = [...productList];
    if (newProductList[index].quantity < 10) {
      let newTotalAmount = totalAmount;
      newProductList[index].quantity++;
      newTotalAmount += newProductList[index].price;
      setTotalAmount(newTotalAmount);
      setProductList(newProductList);
    }
  };

  // Decrement the quantity of a product (limit between 1 and 100)
  const decrementQuantity = (index) => {
    const newProductList = [...productList];
    if (newProductList[index].quantity > 1) {
      let newTotalAmount = totalAmount;
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
      setProductList(newProductList);
      setTotalAmount(newTotalAmount);
    }
  };

  // Reset all product quantities to 0 and reset totalAmount
  const resetQuantity = () => {
    let newProductList = [...productList];
    newProductList.map((product) => {
      product.quantity = 0;
    });
    setProductList(newProductList);
    setTotalAmount(0);
  };

  // Remove item from the product list
  const removeItem = (index) => {
    let newProductList = [...productList];
    let removedProduct = newProductList.splice(index, 1)[0];

    let newTotalAmount = newProductList.reduce((total, product) => {
      return total + (product.price * product.quantity);
    }, 0);

    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  };

  // Function to add item
  const addItem = (name, price) => {
    let newProductList = [...productList];
    newProductList.push({
      name: name,
      price: price,
      quantity: 0,
    });
    setProductList(newProductList);
  };

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddItem addItem={addItem} />
      </main>

      <ProductList
        productList={productList}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
        removeItem={removeItem}
      />

      <Footer totalAmount={totalAmount} handleResetButton={resetQuantity} />
    </>
  );
}

export default App;
