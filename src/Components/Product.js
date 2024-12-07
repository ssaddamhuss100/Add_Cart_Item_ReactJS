import React from "react";

export default function Product({product,index,incrementQuantity,decrementQuantity,removeItem}) {

  const { name, price, quantity } = product; // Destructure the product object

  return (
    <>
      <div className="row m-5">
        <div className="col-5">
          <h1>
            {name}
            <span className="badge bg-secondary">₹{price}</span>
          </h1>
        </div>
        <div className="col-3">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
          >
            {/* Decrement the quantity */}
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => decrementQuantity(index)} // Pass index to decrement function
            >
              -
            </button>

            {/* Display the current quantity */}
            <button type="button" className="btn btn-warning">
              {quantity}
            </button>

            {/* Increment the quantity */}
            <button
              type="button"
              className="btn btn-success"
              onClick={() => incrementQuantity(index)} // Pass index to increment function
            >
              +
            </button>
          </div>
        </div>

        {/* Show the total price of the product */}
        <div className="col-2">{price * quantity}</div>
       
        {/* remove button Created */}
        <button className="col-2 bg-danger text-center p-4" key={index} onClick={() => removeItem(index)}> Remove</button>
      </div>
    </>
  );
}
