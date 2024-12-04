// src/components/PaymentForm.js
import React, { useState } from "react";
import axios from "axios";

const PaymentForm = () => {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send the amount to the backend to initiate payment
      const response = await axios.post(
        "http://localhost:3001/api/v1/payment",
        {
          amount,
        }
      );

      // Extract the payment form data
      const paymentData = response.data.data.data;
      console.log("paymentData", paymentData);
      localStorage.setItem("data", paymentData);

      const form = document.createElement("form");
      form.method = "POST";
      form.action = `https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction&merchant_id=${paymentData.merchant_id}`; // Test payment URL

      // Append payment data to the form
      Object.keys(paymentData).forEach((key) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = paymentData[key];
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
    } catch (error) {
      console.error("Error initiating payment:", error);
    } finally {
      setLoading(false); // Set loading state back to false once the process is complete
    }
  };

  return (
    <div className="mt-6 ml-6">
      <h1>Make a Payment</h1>
      <form onSubmit={handlePayment}>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
          required
        />
        <button type="submit" disabled={loading} className="bg-grey">
          {loading ? "Processing..." : "Proceed to Payment"}
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
