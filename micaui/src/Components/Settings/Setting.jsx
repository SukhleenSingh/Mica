import React, { useState } from 'react';
import { FaHome, FaUser, FaCoins, FaCogs, FaDatabase, FaUserShield, FaBell, FaWrench, FaLock, FaUserCog, FaPalette } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from './Logo.png';

function Setting() {
    const [activeTab, setActiveTab] = useState('profile');

    const renderContent = () => {
        switch (activeTab) {
            case 'profile':
                return (
                    <div>
                        <h3 className='text-lg font-semibold'>Profile Settings</h3>
                        <p>Manage your personal details and preferences.</p>
                    </div>
                );
            case 'security':
                return (
                    <div>
                        <h3 className='text-lg font-semibold'>Security Settings</h3>
                        <p>Update your password and enable two-factor authentication.</p>
                    </div>
                );
            case 'notifications':
                return (
                    <div>
                        <h3 className='text-lg font-semibold'>Notification Settings</h3>
                        <p>Customize your email and push notification preferences.</p>
                    </div>
                );
            case 'system':
                return (
                    <div>
                        <h3 className='text-lg font-semibold'>System Settings</h3>
                        <p>Manage system-wide settings and configurations.</p>
                    </div>
                );
            case 'privacy':
                return (
                    <div>
                        <h3 className='text-lg font-semibold'>Privacy Settings</h3>
                        <p>Control your data-sharing preferences and account visibility.</p>
                        <label className="block mt-4">
                            <input type="checkbox" className="mr-2" />
                            Make my profile private
                        </label>
                        <label className="block mt-2">
                            <input type="checkbox" className="mr-2" />
                            Disable targeted advertisements
                        </label>
                    </div>
                );
            case 'account':
                return (
                    <div>
                        <h3 className='text-lg font-semibold'>Account Settings</h3>
                        <p>Manage your account details and linked accounts.</p>
                        <button className="mt-4 px-4 py-2 bg-red-500 text-white rounded">Delete Account</button>
                    </div>
                );
            case 'appearance':
                return (
                    <div>
                        <h3 className='text-lg font-semibold'>Appearance Settings</h3>
                        <p>Choose between light and dark mode themes.</p>
                        <button className="mt-4 px-4 py-2 bg-gray-800 text-white rounded">Dark Mode</button>
                        <button className="mt-4 ml-2 px-4 py-2 bg-gray-200 text-black rounded">Light Mode</button>
                    </div>
                );
            default:
                return (
                    <div>
                        <h3 className='text-lg font-semibold'>Settings</h3>
                        <p>Select a category to manage settings.</p>
                    </div>
                );
        }
    };
    return (
        <div className="ml-64 p-6 w-full">
            {/* Sidebar */}
            <aside className="w-64 bg-[#111827] text-white min-h-screen p-5 fixed left-0 top-0">
                <div className="flex items-center space-x-2">
                    <img src={Logo} alt="Logo" className="w-auto h-auto" />
                </div>
                <nav className="mt-10 space-y-4">
                    <Link to="/dashboard" className="flex items-center space-x-2 text-gray-300 hover:text-white">
                        <FaHome /> <span>Dashboard</span>
                    </Link>
                    <Link to="/users" className="flex items-center space-x-2 text-gray-300 hover:text-white">
                        <FaUser /> <span>Users</span>
                    </Link>
                    <Link to="/tokens" className="flex items-center space-x-2 text-gray-300 hover:text-white">
                        <FaCoins /> <span>Tokens Management</span>
                    </Link>
                    <Link to="/frontend" className="flex items-center space-x-2 text-gray-300 hover:text-white">
                        <FaDatabase /> <span>Frontend Manager</span>
                    </Link>
                    <Link to="/settings" className="flex items-center space-x-2 text-gray-300 hover:text-white">
                        <FaCogs /> <span>Settings</span>
                    </Link>
                </nav>
            </aside>

            <h2 className="text-2xl font-medium mb-4">Settings Manager</h2>

            {/* Tabs for settings */}
            <div className="flex space-x-4 mb-6">
                <button onClick={() => setActiveTab('profile')} className={`px-4 py-2 rounded ${activeTab === 'profile' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                    <FaUserShield className="inline-block mr-2" /> Profile
                </button>
                <button onClick={() => setActiveTab('security')} className={`px-4 py-2 rounded ${activeTab === 'security' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                    <FaWrench className="inline-block mr-2" /> Security
                </button>
                <button onClick={() => setActiveTab('notifications')} className={`px-4 py-2 rounded ${activeTab === 'notifications' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                    <FaBell className="inline-block mr-2" /> Notifications
                </button>
                <button onClick={() => setActiveTab('system')} className={`px-4 py-2 rounded ${activeTab === 'system' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                    <FaCogs className="inline-block mr-2" /> System
                </button>
                <button onClick={() => setActiveTab('privacy')} className={`px-4 py-2 rounded ${activeTab === 'privacy' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                    <FaLock className="inline-block mr-2" /> Privacy
                </button>

                <button onClick={() => setActiveTab('appearance')} className={`px-4 py-2 rounded ${activeTab === 'appearance' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}>
                    <FaPalette className="inline-block mr-2" /> Appearance
                </button>
            </div>

            {/* Content area */}
            <div className="bg-white shadow rounded-lg p-6">
                {renderContent()}
            </div>
        </div>
    );
}

export default Setting;
