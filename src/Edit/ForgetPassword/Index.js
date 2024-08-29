import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Loading state
const Navigate=useNavigate();
  const url = process.env.REACT_APP_FETCH_URL || 'http://localhost:5000/';

 

  // Handle email submission
  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
     const response= await axios.post(`${url}send-otp`, { email });
     setMessage(response.data);
      setStep(2);      
      setError('');
    } catch (error) {
      setError("Something went wrong. Please try again.");
    setMessage('');
    } finally {
      setLoading(false);
    }
  };

  // Handle OTP verification
  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${url}verify-otp`, { email, otp });
      setStep(3);
      setMessage("OTP verified. Set a new password.");
      setError('');
    } catch (error) {
      setError("Something went wrong. Please try again.");
    setMessage('');
    } finally {
      setLoading(false);
    }
  };

  // Handle password reset
  const handlePasswordReset = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${url}reset-password`, { email, newPassword });
      setMessage("Password reset successfully.");
      alert("Password reset successfully.")
      setError('');
      Navigate('/login')
    } catch (error) {
      setError("Something went wrong. Please try again.");
    setMessage('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-6">
          {step === 1 ? "Forgot Password" : step === 2 ? "Verify OTP" : "Set New Password"}
        </h2>

        <form onSubmit={step === 1 ? handleEmailSubmit : step === 2 ? handleOtpSubmit : handlePasswordReset}>
          {step === 1 && (
            <div className="mb-4">
              <label className="block text-gray-700">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-2 p-2 border rounded-lg"
                placeholder="Enter your email address"
                required
              />
            </div>
          )}

          {step === 2 && (
            <div className="mb-4">
              <label className="block text-gray-700">OTP</label>
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                className="w-full mt-2 p-2 border rounded-lg"
                placeholder="Enter the OTP"
                required
              />
            </div>
          )}

          {step === 3 && (
            <div className="mb-4">
              <label className="block text-gray-700">New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full mt-2 p-2 border rounded-lg"
                placeholder="Enter your new password"
                required
              />
            </div>
          )}

          {message && <p className="text-green-600 mb-4">{message}</p>}
          {error && <p className="text-red-600 mb-4">{error}</p>}

          <button
            type="submit"
            className={`bg-blue-500 text-white py-2 px-4 rounded-lg w-full ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? "Processing..." : step === 1 ? "Validate Email" : step === 2 ? "Verify OTP" : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
