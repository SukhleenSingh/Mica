import React from 'react'
import { FaHome, FaUser, FaCoins, FaCogs, FaDatabase } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from './Logo.png';

function Frontend() {
    return (
        <div className='flex container mx-auto'>
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

            {/* Main Content */}
            <div className='ml-64 p-6 w-full'>
                <h2 className='text-2xl font-medium mb-4'>Frontend Manager</h2>
                <div className='bg-white shadow rounded-lg p-4'>
                    <p>Welcome to the Frontend Manager module. </p>
                </div>
            </div>
        </div>
    )
}

export default Frontend
