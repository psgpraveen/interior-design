import React, { useState } from 'react';
import axios from 'axios';
import { useLocation ,useNavigate} from 'react-router-dom'

const Profile = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { userData ,token } = location.state || {};
    const url = process.env.REACT_APP_FETCH_URL ? `${process.env.REACT_APP_FETCH_URL}profile` : "http://localhost:5000/profile";
    const [loading, setLoading] = useState(false)
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({
        name: userData.user.name,
        email: userData.user.email,
        phone: userData.user.mobileNo,
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handleEdit = () => {
        setIsEditing(!isEditing);
        setError('');
        setSuccess('');
    };

    const handleSave = async () => {
        try {
            setLoading(true)
            const _id = localStorage.getItem('_id');

            const response = await axios.post(url, {
                name: profile.name,
                email: profile.email,
                phone: profile.phone,

                _id: _id,
            });

            if (response.status === 200) {

                setSuccess('Profile updated successfully!');
                
                navigate('/profile', {
                    state: {
                        userData: {
                            user: {
                                name: response.data.user.name,
                                email: response.data.user.email,
                                mobileNo: response.data.user.mobileNo,
                            },
                           
                        } ,token
                    }
                });
                setIsEditing(false);
            }
        } catch (error) {
            setError('Failed to update profile. Please try again.');
            console.error('Error updating profile:', error);
        } finally {
            setLoading(false)
            setSuccess(' ');
        }
    };

    return (
        <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Profile Details</h2>
            {error && <p className="text-red-500">{error}</p>}
            {success && <p className="text-green-500">{success}</p>}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                {isEditing ? (
                    <input
                        type="text"
                        name="name"
                        value={profile.name}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                ) : (
                    <p className="text-gray-900">{profile.name}</p>
                )}
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                {isEditing ? (
                    <input
                        type="email"
                        name="email"
                        value={profile.email}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                ) : (
                    <p className="text-gray-900">{profile.email}</p>
                )}
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">Phone</label>
                {isEditing ? (
                    <input
                        type="text"
                        name="phone"
                        value={profile.phone}
                        onChange={handleChange}
                        className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                ) : (
                    <p className="text-gray-900">{profile.phone}</p>
                )}
            </div>

            <div className="flex justify-between">
                <button
                    onClick={handleEdit}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    {isEditing ? 'Cancel' : 'Edit'}
                </button>
                {isEditing && (
                    <button
                        onClick={handleSave}
                        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600" disabled={loading}
                    >
                        {loading ? "Processing..." : "Save"}
                    </button>
                )}
            </div>
        </div>
    );
};

export default Profile;
