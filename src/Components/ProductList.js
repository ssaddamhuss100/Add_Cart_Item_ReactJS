import React from "react";
import Product from "./Product";

export default function ProductList(props) {
  // Destructure the props
  const { productList, incrementQuantity, decrementQuantity, removeItem } = props;
  
  return (
    <>
      {/* Check if productList has items */}
      {productList.length > 0 ? (
        // Loop over the productList and render Product component for each item
        productList.map((product, index) => (
          <Product
            key={index} // Use index as key for each product
            product={product}
            index={index} // Pass the index of the product
            incrementQuantity={incrementQuantity}
            decrementQuantity={decrementQuantity}
            removeItem={removeItem} // Pass removeItem function to Product component
          />
        ))

      ) : (
        // Display message if no products exist
        <h1>No Product Exists in the Cart</h1>
      )
    }
    </>
  );
}
