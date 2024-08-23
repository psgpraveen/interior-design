import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FeedbackBlock = () => {
  const [feedback, setFeedback] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = process.env.REACT_APP_FETCH_URL ? `${process.env.REACT_APP_FETCH_URL}feedback` : "http://localhost:5000/feedback";  

  const fetchFeedback = async () => {
    try {
      const response = await axios.get(url);
      setFeedback(response.data);
    } catch (error) {
      console.error('Error fetching feedback:', error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {

    fetchFeedback();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(url+`/${id}`);
      setFeedback(feedback.filter(item => item._id !== id));
    } catch (error) {
      console.error('Error deleting feedback:', error);
    }
  };

  return (
    <div id='feedback1' className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-100 to-gray-200 p-6">
      <div className="w-full max-w-4xl bg-white p-6 rounded-lg shadow-lg">
        <header className="mb-6 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Customer Feedback</h1>
          <p className="text-lg text-gray-700">What our customers say about us.</p>
        </header>

        {loading ? (
          <div className="flex justify-center items-center min-h-[200px]">
            <svg className="animate-spin h-12 w-12 text-blue-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        ) : feedback.length === 0 ? (
          <p className="text-gray-500 text-center">No feedback available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {feedback.map((item) => (
              <div key={item._id} className="relative p-6 bg-white border border-gray-300 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl overflow-hidden">
                <button
                  onClick={() => handleDelete(item._id)}
                  className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
                  title="Delete"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white p-4 rounded-t-lg">
                  <h2 className="text-xl font-bold">{item.Name}</h2>
                  <p className="text-sm">{item.Email}</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-b-lg">
                  <p className="text-gray-800">{item.Message}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FeedbackBlock;
