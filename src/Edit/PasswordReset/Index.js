import React, { useState } from 'react';
import axios from 'axios';

const ResetPassword = () => {
  const [mobile, setMobile] = useState('');
  const [resetToken, setResetToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_FETCH_URL}/reset-password`, {
        mobileNo: mobile,
        resetToken,
        newPassword,
      });
      setMessage("Password reset successfully");
      setError('');
    } catch (error) {
      setError("Failed to reset password. Please try again.");
      setMessage('');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg px-8 py-6">
          <h2 className="text-2xl font-bold mb-6">Reset Password</h2>
          <div className="mb-4">
            <label className="block text-gray-700">OTP</label>
            <input
              type="text"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full mt-2 p-2 border rounded-lg"
              placeholder="Enter your mobile number"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Reset Token</label>
            <input
              type="text"
              value={resetToken}
              onChange={(e) => setResetToken(e.target.value)}
              className="w-full mt-2 p-2 border rounded-lg"
              placeholder="Enter the reset token"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full mt-2 p-2 border rounded-lg"
              placeholder="Enter your new password"
            />
          </div>
          {message && <p className="text-green-600">{message}</p>}
          {error && <p className="text-red-600">{error}</p>}
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg">
            Reset Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
