// src/components/PaymentForm.js
import React, { useState } from "react";
import axios from "axios";

const PaymentForm = () => {
   const fixedAmount = 59;
  const [amount, setAmount] = useState(fixedAmount);
  const [loading, setLoading] = useState(false);
  
  const RAZORPAY_KEY_ID = "rzp_test_T09tRz2hjNXFll";
  
 
  // const handlePayment = async () => {
   
  //   setLoading(true);

  //   try {
  //     // Send the amount to the backend to initiate payment
  //     const response = await axios.post(
  //       "http://localhost:3000/api/v1/payment",
  //       {
  //         amount,
  //       }
  //     );

  //     // Extract the payment form data
  //     const paymentData = response.data.data.data;
  //     const token = response.data.data.token;
  //     const paymentUrl = response.data.data.paymentUrl;
  //     const mid = paymentData.merchant_id;
  //     const access = paymentData.access_code;
     

  //     // Save the payment data in localStorage
  //     localStorage.setItem("data", JSON.stringify(paymentData));


  //     // // Open the payment URL in a new tab
  //      window.open(paymentUrl, "_blank");
  //     // window.location.href = paymentUrl;
     
  //   } catch (error) {
  //     console.error("Error initiating payment:", error);
  //   } finally {
  //     setLoading(false); // Set loading state back to false once the process is complete
  //   }
  // };

//  const handlePayment = async () => {
//    setLoading(true);

//    try {
//      // Make the API request to your backend to get the payment URL
//      const response = await axios.post("http://localhost:3000/api/v1/payment", {
//        amount,
//      });

//      const paymentUrl = response.data.data.paymentUrl;

//      if (paymentUrl) {
//        // Redirect to the payment gateway URL in the same tab
//        window.location.href = paymentUrl;

//        // Or, open it in a new tab
//        // window.open(paymentUrl, "_blank");
//      } else {
//        console.error("Payment URL not found");
//        alert("There was an error getting the payment URL.");
//      }
//    } catch (error) {
//      console.error("Error initiating payment:", error);
//      alert("There was an error initiating the payment.");
//    } finally {
//      setLoading(false);
//    }
//  };


    const handlePayment = async () => {
      try {
        // Step 1: Create an order on the backend
        const { data: order } = await axios.post(
          "https://api.trymorise.com/api/v1/payment",
          {
            amount: fixedAmount, // Amount in INR
            currency: "INR",
          }
        );
        console.log("order.id", order);
const id=localStorage.getItem("userId");
        // Step 2: Initialize Razorpay
        const options = {
          key: "rzp_live_fj18JIt6W3Ts2G", // Replace with your Razorpay key
          amount: order.data.data.amount,
          currency: order.data.data.currency,
          name: "Your Company",
          description: "Test Transaction",
          order_id: order.data.data.id,
          handler: async function (response) {
            // Step 3: Verify the payment
            console.log("Razorpay response:", response);
            const { data } = await axios.post(
              "https://api.trymorise.com/api/v1/payment/response",
              {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                user_id: localStorage.getItem("userId"),
                order_id: order.data.data.id,
                // name: user.name,
                // email: user.email,
                amount: fixedAmount,
              }
            );
            console.log("data", data.data.result);
            if (data.data.success) {
              alert("Payment Successful");
            } else {
              alert("Payment Verification Failed");
            }
          },
          prefill: {
            name: "John Doe",
            email: "john.doe@example.com",
            contact: "9999999999",
          },
          theme: {
            color: "#3399cc",
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      } catch (error) {
        console.error(error);
        alert("Payment failed. Please try again.");
      }
    };

  return (
  
   
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
