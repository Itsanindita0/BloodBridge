// src/App.jsx
import React from "react";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <nav className="bg-red-600 text-white px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">BloodBridge+</h1>
        <div className="space-x-6">
          <a href="#features" className="hover:text-yellow-300">Features</a>
          <a href="#about" className="hover:text-yellow-300">About</a>
          <a href="#contact" className="hover:text-yellow-300">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="flex-1 flex flex-col justify-center items-center text-center px-6 py-12 bg-gradient-to-b from-red-600 to-red-400 text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Smart Blood Donation & Emergency Support
        </h2>
        <p className="max-w-2xl text-lg mb-6">
          Connecting donors, patients, and hospitals in real-time to save lives faster and smarter.
        </p>
        <div className="space-x-4">
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300">
            Request Blood
          </button>
          <button className="bg-white text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-200">
            Become a Donor
          </button>
        </div>
      </header>

      {/* Features */}
      <section id="features" className="py-12 px-6">
        <h3 className="text-3xl font-bold text-center mb-8">Key Features</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h4 className="font-semibold text-xl mb-2">Urgency Prediction</h4>
            <p>AI-powered scoring to prioritize emergency cases.</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h4 className="font-semibold text-xl mb-2">Live Inventory</h4>
            <p>Check hospital blood stock in real-time.</p>
          </div>
          <div className="bg-white shadow-lg rounded-xl p-6">
            <h4 className="font-semibold text-xl mb-2">Donor Rewards</h4>
            <p>Earn credits, badges, and certificates for your contributions.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-red-600 text-white text-center py-6 mt-8">
        <p>© 2025 BloodBridge+. All rights reserved.</p>
        <p>Email: support@bloodbridge.com</p>
      </footer>
    </div>
  );
}

export default App;
