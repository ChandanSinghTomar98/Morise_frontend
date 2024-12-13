// src/components/PaymentForm.js
import React, { useState } from "react";
import axios from "axios";

const PaymentForm = () => {
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

//  const handlePayment = async (e) => {
//    e.preventDefault();
//    setLoading(true);

//    try {
//      // Send the amount to the backend to initiate payment
//      const response = await axios.post("http://localhost:3000/api/v1/payment", {
//        amount,
//      });

//      // Extract the payment form data
//      const paymentData = response.data.data.data;
//      const token = response.data.data.token;
//      console.log("paymentData", paymentData);
//       console.log("paymentData", );
//      localStorage.setItem("data", paymentData);
//    console.log("paymentData.merchant_id", paymentData.merchant_id);
//      // Construct the payment URL
//      const paymentUrl = `https://test.ccavenue.com/transaction/transaction.do?command=initiateTransaction&merchant_id=${paymentData.merchant_id}&encRequest=${token}&access_code=${paymentData.access_code}`;

//      // Open the payment URL in a new tab
//      window.open(paymentUrl, "_blank");
//    } catch (error) {
//      console.error("Error initiating payment:", error);
//    } finally {
//      setLoading(false); // Set loading state back to false once the process is complete
//    }
//  };
const handlePayment = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    // Send the amount to the backend to initiate payment
    const response = await axios.post("http://localhost:3000/api/v1/payment", {
      amount,
    });

    // Extract the payment form data
    const paymentData = response.data.data.data;
    const token = response.data.data.token;

    console.log("paymentData", paymentData);
    console.log("merchant_id", paymentData.merchant_id);
    console.log("access_code", paymentData.access_code);
    console.log("token", token);

    // Save the payment data in localStorage
    localStorage.setItem("data", JSON.stringify(paymentData));

    // Construct the payment URL
    const paymentUrl = `https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction&merchant_id=${paymentData.merchant_id}&encRequest=${token}&access_code=${paymentData.access_code}`;

    console.log("Payment URL:", paymentUrl); // Log the constructed URL

    // Open the payment URL in a new tab
    window.open(paymentUrl, "_blank");
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
