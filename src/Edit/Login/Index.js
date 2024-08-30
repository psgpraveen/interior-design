import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  const url = process.env.REACT_APP_FETCH_URL ? `${process.env.REACT_APP_FETCH_URL}signin` : "http://localhost:5000/signin";
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [forgotLoading, setForgotLoading] = useState(false);

  const login = async () => {
    setLoading(true);
    try {
      const response = await axios.post(url, { email: email, password });
      if (response.status === 200) {
        const { token } = response.data;        
        if (token) {
          localStorage.setItem('authToken', token);
          localStorage.setItem('_id', response.data.user._id);
          navigate('/home', { state: { userData: response.data, token } });
        } else {
          setError("Token not received");
        }
      } else {
        setError("Invalid response from server");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        setError(error.response.data);
    } else {
        setError("An error occurred during login.");
    }
    } finally {
      setLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    setForgotLoading(true);
    try {
      navigate('/forgot')
    } catch (error) {
      setError('An error occurred during password reset.');
    } finally {
      setForgotLoading(false);
    }
  };

  return (
    <div className="font-sans min-h-screen flex flex-col items-center justify-center py-6 px-4">
      <div className="grid md:grid-cols-2 items-center gap-4 max-w-6xl w-full">
        <div className="border border-gray-300 rounded-lg p-6 max-w-md shadow-lg">
          <form className="space-y-4">
            <h3 className="text-gray-800 text-3xl font-extrabold">Sign in</h3>
            <p className="text-gray-500 text-sm mt-4 leading-relaxed">
              Sign in to your account and explore a world of possibilities. Your journey begins here.
            </p>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">Email</label>
              <input
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg"
                placeholder="Enter Email"
              />
            </div>
            
            <div>
              <label className="text-gray-800 text-sm mb-2 block">Password</label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-lg"
                placeholder="Enter password"
              />
            </div>

            {error && <p className="text-red-600">{error}</p>}

            <button
              type="button"
              onClick={login}
              className="w-full py-3 px-4 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-lg"
              disabled={loading}
            >
              {loading ? "Logging in..." : "Log in"}
            </button>

            <div className="text-center mt-4">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-blue-600 hover:underline"
                disabled={forgotLoading}
              >
                {forgotLoading ? "Processing..." : "Forgot Password?"}
              </button>
            </div>
          </form>
        </div>
        <div className="lg:h-[400px] md:h-[300px] mt-8">
          <img src="https://readymadeui.com/login-image.webp" className="w-full h-full object-cover" alt="Login" />
        </div>
      </div>
    </div>
  );
};

export default Index;
