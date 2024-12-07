import React, { useState } from "react";

export default function AddItem({ addItem }) {
  // Local state for name and price
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  // Handler for name change
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  // Handler for price change
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  // Submit handler when adding an item
  const handleSubmit = () => {
    if (name && price > 0) {
      addItem(name, parseFloat(price)); // Call the addItem function from App
      setName(""); // Reset name
      setPrice(0); // Reset price
    } else {
      alert("Please fill out both fields with valid data!");
    }
  };

  return (
    <form className="row mt-3 mx-3">
      <div className="form-group col-12 col-md-6 col-lg-4 mb-2">
        <label htmlFor="name">Product Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Enter name here"
          value={name}
          onChange={handleNameChange}
        />
      </div>

      <div className="form-group col-12 col-md-6 col-lg-4 mb-2">
        <label htmlFor="Price">Product Price</label>
        <input
          type="number"
          className="form-control"
          id="Price"
          value={price}
          onChange={handlePriceChange}
          placeholder="Enter amount of the item here"
        />
      </div>

      <button
        type="button"
        className="btn btn-outline-success col-12 col-md-6 col-lg-4 mb-2"
        onClick={handleSubmit} // Use handleSubmit to process the form
      >
        Add Item
      </button>
    </form>
  );
}
