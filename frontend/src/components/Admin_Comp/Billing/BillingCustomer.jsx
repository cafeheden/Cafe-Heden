import React from "react";

const Billing_Customer = ({ customerName, setCustomerName, customerNumber, setCustomerNumber}) => {
  return (
    <div className="">
      <h1 className="text-lightGrey">Customer Detail</h1>
      <div className="flex gap-8 mt-2">
        <input
          type="text"
          name="name"
          placeholder="Customer Name"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="p-3 border rounded w-full"
          required
        />
        <input
          type="text"
          name="number"
          placeholder="Phone Number"
          value={customerNumber}
          onChange={(e) => setCustomerNumber(e.target.value)}
          className="p-3 border rounded w-full"
          required
        />
      </div>
    </div>
  );
};

export default Billing_Customer;
