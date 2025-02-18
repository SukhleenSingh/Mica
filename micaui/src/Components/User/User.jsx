import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaHome, FaUser, FaCoins, FaCogs, FaDatabase } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Logo from './Logo.png';

function User() {

  const [users, setUsers] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('Newest');

  // Fetch Users from Backend
  useEffect(() => {
    axios.get('http://localhost:5000/api/users')
      .then(response => {

        setUsers(response.data);

      })
      .catch(error => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const statusCounts = {
    All: users.length,
    Completed: users.filter(user => user.status === 'Completed').length,
    Pending: users.filter(user => user.status === 'Pending').length,
    Rejected: users.filter(user => user.status === 'Rejected').length,
  };

  const filteredUsers = users
    .filter(user => selectedStatus === 'All' || user.status === selectedStatus)
    .filter(user =>
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (user.kycId && user.kycId.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .sort((a, b) => sortOrder === 'Newest' ? new Date(b.createdAt) - new Date(a.createdAt) : new Date(a.createdAt) - new Date(b.createdAt));

  return (
    <div className='flex'>
      <aside className='w-64 bg-[#111827] text-white min-h-screen p-5 fixed left-0 top-0'>
        <div className='flex items-center space-x-2'>
          <img src={Logo} alt='Logo' className='w-auto h-auto' />
        </div>
        <nav className='mt-10 space-y-4'>
          <Link to='/dashboard' className='flex items-center space-x-2 text-gray-300 hover:text-white'><FaHome /> <span>Dashboard</span></Link>
          <Link to='/users' className='flex items-center space-x-2 text-gray-300 hover:text-white'><FaUser /> <span>Users</span></Link>
          <Link to='/tokens' className='flex items-center space-x-2 text-gray-300 hover:text-white'><FaCoins /> <span>Tokens Management</span></Link>
          <Link to='/frontend' className='flex items-center space-x-2 text-gray-300 hover:text-white'><FaDatabase /> <span>Frontend Manager</span></Link>
          <Link to='/settings' className='flex items-center space-x-2 text-gray-300 hover:text-white'><FaCogs /> <span>Settings</span></Link>
        </nav>
      </aside>

      <div className='ml-64 p-6 w-full'>
        <h2 className='text-2xl font-medium mb-4'>Customers</h2>

        <div className='bg-white shadow rounded-lg p-4 mb-4'>
          <div className='flex space-x-4 pb-2'>
            {Object.keys(statusCounts).map(status => (
              <button
                key={status}
                onClick={() => setSelectedStatus(status)}
                className={`px-4 py-2 rounded-t-lg text-sm font-semibold ${selectedStatus === status ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600 hover:border-b-2 hover:border-blue-300'}`}
              >
                {status} ({statusCounts[status]})
              </button>
            ))}
          </div>
        </div>

        <div className='bg-white shadow rounded-lg p-4'>
          <div className='flex justify-between items-center mb-4'>
            <input type='text' placeholder='Search' className='border border-gray-300 p-2 rounded w-40' value={searchTerm} onChange={e => setSearchTerm(e.target.value)} />
            <select className='text-gray-500 border border-gray-300 p-2 rounded' value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
              <option>Newest</option>
              <option>Oldest</option>
            </select>
          </div>

          <table className='w-full border-collapse border border-gray-200'>
            <thead>
              <tr className='bg-gray-100 text-[#333B69] font-normal text-left '>
                <th className='p-2 font-normal'>Name</th>
                <th className='p-2 font-normal'>Email</th>
                <th className='p-2 font-normal'>KYC ID</th>
                <th className='p-2 font-normal'>Created At</th>
                <th className='p-2 font-normal'>KYC Status</th>
              </tr>

            </thead>
            <tbody>
              {filteredUsers.map((user, index) => (
                <tr key={index} className='text-center border-b border-gray-200'>
                  <td className='px-4 py-2 text-left'>{user.name}</td>
                  <td className='px-4 py-2 text-left'>{user.email}</td>
                  <td className='px-4 py-2 text-left'>{user.kycId || 'N/A'}</td> {/* Displaying KYC ID */}
                  <td className='px-4 py-2 text-left'>{new Date(user.createdAt).toLocaleString()}</td>
                  <td className='px-4 py-2'>
                    <span className={`px-4 py-1 rounded ${user.status === 'Pending' ? 'bg-yellow-200 text-yellow-800' : user.status === 'Completed' ? 'bg-green-200 text-green-800' : 'bg-red-200 text-red-800'}`}>{user.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default User;
