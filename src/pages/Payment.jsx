// src/components/PaymentForm.js
import React, { useState } from "react";
import axios from "axios";

const PaymentForm = () => {
   const fixedAmount = 59;
  const [amount, setAmount] = useState(fixedAmount);
  const [loading, setLoading] = useState(false);
  
  
  const redirectToTransaction = (mid,token,access) => {
  
      const url = `https://test.ccavenue.com/transaction/transaction.do?command=initiateTransaction&merchant_id=${mid}&encRequest=${token}&access_code=${access}`;
    window.location.href = url; // This will redirect to the URL
  };

 
  const handlePayment = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send the amount to the backend to initiate payment
      const response = await axios.post(
        "http://localhost:3000/api/v1/payment",
        {
          amount,
        }
      );

      // Extract the payment form data
      const paymentData = response.data.data.data;
      const token = response.data.data.token;
      const mid = paymentData.merchant_id;
      const access = paymentData.access_code;
      console.log("paymentData", paymentData);
      console.log("merchant_id", paymentData.merchant_id);
      console.log("access_code", paymentData.access_code);
      console.log("token", token);

      // Save the payment data in localStorage
      localStorage.setItem("data", JSON.stringify(paymentData));

      // Construct the payment URL
      // const paymentUrl = `https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction&merchant_id=${paymentData.merchant_id}&encRequest=${token}&access_code=${paymentData.access_code}`;

       const paymentUrl = `https://test.ccavenue.com/transaction/transaction.do?command=initiateTransaction&merchant_id=${paymentData.merchant_id}&encRequest=${token}&access_code=${paymentData.access_code}`;

      // console.log("Payment URL:", paymentUrl); // Log the constructed URL

      // // Open the payment URL in a new tab
      window.open(paymentUrl, "_blank");
      // redirectToTransaction(mid,token,access)
    } catch (error) {
      console.error("Error initiating payment:", error);
    } finally {
      setLoading(false); // Set loading state back to false once the process is complete
    }
  };
  return (
    // <div className="mt-6 ml-6">
    //   <h1>Make a Payment</h1>
    //   <form onSubmit={handlePayment}>
    //     <input
    //       type="number"
    //       value={amount}
    //       onChange={(e) => setAmount(e.target.value)}
    //       placeholder="Enter amount"
    //       required
    //     />
    //     <button type="submit" disabled={loading} className="bg-grey">
    //       {loading ? "Processing..." : "Proceed to Payment"}
    //     </button>
    //   </form>
    // </div>
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl overflow-hidden mt-10">
      <div className="p-6 text-center bg-gray-50">
        <div className="text-xl font-semibold text-gray-800 mb-2">
          Total Amount Due
        </div>
        <div className="text-4xl font-bold text-green-600 mb-4">
          ₹{fixedAmount}.00
        </div>
        <div className="text-sm text-gray-600 mb-4">
          Payment for document verification
        </div>
      </div>
      <div className="p-6 bg-white">
        <button
          onClick={handlePayment}
          disabled={loading}
          className={`w-full py-3 rounded-lg text-lg font-semibold transition-colors duration-300 ${
            loading
              ? "bg-gray-400 text-gray-200 cursor-not-allowed"
              : "bg-green-500 text-white hover:bg-green-600 active:bg-green-700"
          }`}
        >
          {loading ? "Processing Payment..." : `Pay Now ₹${fixedAmount}`}
        </button>
        <div className="text-center text-xs text-gray-500 mt-4">
          Secure payment powered by our trusted payment gateway
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
