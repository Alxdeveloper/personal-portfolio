import React, { useState } from "react";
import axios from "axios";

const MembersDashboard = () => {
  const [paymentStatus, setPaymentStatus] = useState(null);
  const [paymentAmount, setPaymentAmount] = useState("");
  const [paymentRecipient, setPaymentRecipient] = useState(""); // New state for recipient

  // Simulating MPESA payment integration
  const handlePayment = async () => {
    if (!paymentAmount || isNaN(paymentAmount) || paymentAmount <= 0) {
      setPaymentStatus("Invalid payment amount");
      return;
    }
    if (!paymentRecipient) {
      setPaymentStatus("Please select a recipient.");
      return;
    }

    try {
      // Here you would integrate MPESA API for payment
      // Mocked response
      const response = await axios.post("http://localhost:3001/payment", {
        amount: paymentAmount,
        recipient: paymentRecipient, // Sending recipient along with payment
      });

      if (response.data.success) {
        setPaymentStatus(`Payment of $${paymentAmount} to ${paymentRecipient} was successful!`);
      } else {
        setPaymentStatus("Payment failed. Please try again.");
      }
    } catch (error) {
      setPaymentStatus("An error occurred while processing the payment.");
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-600 text-white flex flex-col">
        <div className="p-4 text-center font-bold text-xl border-b border-blue-500">
          Welfare Dashboard
        </div>
        <nav className="flex-1 p-4">
          <ul className="space-y-4">
            <li>
              <a href="#" className="block py-2 px-4 rounded hover:bg-blue-700">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 rounded hover:bg-blue-700">
                Profile
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 rounded hover:bg-blue-700">
                Contributions
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 rounded hover:bg-blue-700">
                Benefits
              </a>
            </li>
            {/* Removed Announcements */}
          </ul>
        </nav>
        <div className="p-4 border-t border-blue-500">
          <button className="w-full py-2 px-4 bg-red-500 rounded hover:bg-red-600">
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Header */}
        <header className="p-4 bg-white shadow flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-700">Dashboard</h1>
          <div>
            <span className="text-gray-700">Welcome, <strong>Member</strong></span>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Widget 1 */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-bold text-gray-700">Total Contributions</h3>
              <p className="text-2xl font-semibold text-blue-600 mt-2">$500</p>
            </div>

            {/* Widget 2 */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-bold text-gray-700">Benefits Received</h3>
              <p className="text-2xl font-semibold text-green-600 mt-2">$200</p>
            </div>

            {/* Widget 3 */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="text-lg font-bold text-gray-700">Pending Requests</h3>
              <p className="text-2xl font-semibold text-yellow-600 mt-2">2</p>
            </div>
          </div>

          {/* Payment Section */}
          <div className="mt-6 bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-bold text-gray-700">Make a Payment</h3>
            <div className="mt-4">
              <label htmlFor="paymentAmount" className="block text-sm text-gray-700">
                Enter Amount to Pay
              </label>
              <input
                id="paymentAmount"
                type="number"
                value={paymentAmount}
                onChange={(e) => setPaymentAmount(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md mt-2"
                placeholder="Enter amount"
              />
            </div>

            {/* Recipient Selection */}
            <div className="mt-4">
              <label htmlFor="paymentRecipient" className="block text-sm text-gray-700">
                Select Recipient
              </label>
              <select
                id="paymentRecipient"
                value={paymentRecipient}
                onChange={(e) => setPaymentRecipient(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md mt-2"
              >
                <option value="">Make Payment For:</option>
                <option value="John Doe">John Doe</option>
                <option value="Jane Smith">Jane Smith</option>
                <option value="Company ABC">Company ABC</option>
                {/* You can dynamically populate this list from your backend or any data source */}
              </select>
            </div>

            <button
              onClick={handlePayment}
              className="w-full mt-4 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Make Payment
            </button>
            {paymentStatus && (
              <p
                className={`mt-4 text-sm ${
                  paymentStatus.includes("successful")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {paymentStatus}
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default MembersDashboard;
