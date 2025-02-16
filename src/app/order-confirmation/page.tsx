"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const OrderConfirmation = () => {
  const [orderDetails, setOrderDetails] = useState<any>(null);
  const router = useRouter();

  // Fetch order details from localStorage
  useEffect(() => {
    const storedOrder = localStorage.getItem("orderDetails");
    if (storedOrder) {
      setOrderDetails(JSON.parse(storedOrder));
    } else {
      router.push("/"); // Redirect to home if no order details found
    }
  }, [router]);

  if (!orderDetails) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-700 text-xl font-medium">Loading order details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-3xl font-semibold mb-8 text-center">Order Confirmation</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4">Thank You for Your Purchase!</h2>
          <p className="text-sm text-gray-600">Your order has been placed successfully.</p>

          {/* Order Summary */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
            {orderDetails.cart.map((item: any) => (
              <div key={item._id} className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <img src={item.imageUrl} alt={item.title} className="h-12 w-12 object-cover rounded-lg" />
                  <div className="ml-4">
                    <p className="text-sm font-medium">{item.title}</p>
                    <p className="text-xs text-gray-500">Qty: {item.quantity}</p>
                  </div>
                </div>
                <p className="text-sm font-medium">${item.price * item.quantity}</p>
              </div>
            ))}
            <div className="border-t pt-4">
              <div className="flex justify-between">
                <p className="text-sm text-gray-600">Subtotal</p>
                <p className="text-sm font-medium">${orderDetails.total + orderDetails.appliedDiscount}</p>
              </div>
              {orderDetails.appliedDiscount > 0 && (
                <div className="flex justify-between">
                  <p className="text-sm text-gray-600">Discount</p>
                  <p className="text-sm font-medium text-green-500">-${orderDetails.appliedDiscount}</p>
                </div>
              )}
              <div className="flex justify-between mt-2">
                <p className="text-lg font-semibold">Total</p>
                <p className="text-lg font-semibold">${orderDetails.total}</p>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
            <p className="text-sm text-gray-600 capitalize">{orderDetails.paymentMethod}</p>
          </div>

          {/* Order Completion Message */}
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">You will receive an email confirmation shortly.</p>
            <button
              onClick={() => router.push("/")}
              className="mt-4 bg-[#007580] text-white px-6 py-2 rounded-lg text-sm"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
