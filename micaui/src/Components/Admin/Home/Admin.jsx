import React from 'react';
import { Outlet, Link } from "react-router-dom";
import { FaHome, FaUser, FaCoins, FaCogs, FaDatabase, FaArrowRight } from 'react-icons/fa';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import { BsGraphUp } from "react-icons/bs";
import Rectangle from './Rectangle.png';
import Logo from './Logo.png';
import Mask from './Mask.png';
import RectangleBg from './BgRectangle.png';
import BNB from './BNB.png';
import Q from './Q.png';
import DOGE from './DOGE.png';
import USDC from './USDC.png';
import XRP from './XRP.png';
function Admin() {

  const balanceData = [
    { name: "Q-TOK", value: 10076.81, color: "#00C49F" },
    { name: "USDC", value: 16213.20, color: "#00A3FF" },
    { name: "DOGE ", value: 16213.20, color: "#FFBB28" },
    { name: "BNB", value: 9626.80, color: "#FF6384" },
  ];

  const transactions = [
    {
      type: "Buy BTC",
      date: "12.18.2024 / 07:50 AM",
      amount: "+ 0.2105 BTC",
      value: "$643.00",
      iconColor: "bg-[#2EB897]",
      textColor: "text-[#2EB897]",
    },
    {
      type: "Buy BTC",
      date: "12.18.2024 / 07:50 AM",
      amount: "+ 0.2105 BTC",
      value: "$643.00",
      iconColor: "bg-[#2EB897]",
      textColor: "text-[#2EB897]",
    },
    {
      type: "Sell BTC",
      date: "12.14.2024 / 07:54 AM",
      amount: "- 0.2105 BTC",
      value: "$4,805.00",
      iconColor: "bg-[#E85D75]",
      textColor: "text-[#E85D75]",
    },
  ];

  const tokens = [
    {
      name: "XRP",
      fullName: "XRP",
      icon: XRP,
      address: "76fa288e-7270-45c6-4b1a-df89306a6053ghbd",
      worth: "8.87k",
      value: "$1800",
    },
    {
      name: "USDC",
      fullName: "USD Coin",
      icon: USDC,
      address: "76fa288e-7270-45c6-4b1a-df89306a6053ghbd",
      worth: "8.87k",
      value: "$1800",
    },
    {
      name: "BNB",
      fullName: "BNB",
      icon: BNB,
      address: "76fa288e-7270-45c6-4b1a-df89306a6053ghbd",
      worth: "8.87k",
      value: "$1800",
    },
    {
      name: "DOGE",
      fullName: "Dogecoin",
      icon: DOGE,
      address: "76fa288e-7270-45c6-4b1a-df89306a6053ghbd",
      worth: "8.87k",
      value: "$1800",
    },
  ];

  return (
    <div className="flex min-h-screen" style={{ backgroundImage: `url(${Rectangle})` }}>

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

      {/* Main Content (Right Side) */}
      <div className="flex-1 ml-64 p-8">
        <Outlet />
        {/* 1st section */}
        <div className="flex">
          {/* Header Section with Background Images */}
          <div
            className="relative text-white p-6 rounded-lg overflow-hidden w-[72%]"
            style={{
              backgroundImage: `url(${RectangleBg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            {/* Mask Overlay */}
            <div
              className="absolute inset-0"
              style={{ backgroundImage: `url(${Mask})`, backgroundSize: 'cover', backgroundPosition: 'right' }}
            ></div>

            {/* Header Content */}
            <div className="relative z-10">
              <h2 className="text-2xl font-semibold">Hello Sukhleen!</h2>
              <p className="font-light">Welcome Back to MiCA Wallet</p>
            </div>
          </div>

          {/* Profile Section - Positioned on the right side */}
          <div className="absolute top right-10   bg-white p-2 w-[20%] h-52 rounded-lg shadow-lg text-black flex flex-col justify-center space-y-4">
            <h3 className="text-lg text-[#333B69] font-normal">Profile</h3>
            <p className='text-[#333B69]'>Email: <span className='text-black ml-6'>sukhleen@yopmail.com</span></p>
            <p className='text-[#333B69]'>KYC ID: <span className='text-black ml-6'>dfsf85754dfsf780df </span></p>
            <p className="text-[#333B69]">KYC Status: <span className='bg-red-400 ml-4 rounded-3xl px-4 py-1 text-white'>Pending</span></p>
          </div>
        </div>

        {/* 2nd section */}
        <div className="flex">

          {/* Wallet */}
          <div className="bg-white mt-4 p-6 rounded-lg shadow-lg text-black w-[450px]">
            <h3 className="text-[#333B69] text-lg font-semibold mb-4">Wallet</h3>

            {/* Table */}
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="pb-2 text-[#333333] font-medium">NAME</th>
                  <th className="pb-2 text-[#333333] font-medium">QTY</th>
                  <th className="pb-2 text-[#333333] font-medium">BALANCE</th>
                </tr>
              </thead>
              <tbody>
                {/* Wallet Items */}
                {[
                  { name: "Q-TOK", icon: Q, qty: 1, balance: "$ 1,00000" },
                  { name: "DOGE", icon: DOGE, qty: 1, balance: "$ 1,00000" },
                  { name: "USDC", icon: USDC, qty: 1, balance: "$ 1,00000" },
                  { name: "BNB", icon: BNB, qty: 1, balance: "$ 1,00000" },
                  { name: "XRP", icon: XRP, qty: 1, balance: "$ 1,00000" },
                ].map((token, index) => (
                  <tr key={index} className="border-b border-b-[#E7E7E7] last:border-none ">
                    <td className="py-2 flex items-center space-x-2 text-[#333333]">
                      <img src={token.icon} alt={token.name} className="w-6 h-6" />
                      <span>{token.name}</span>
                    </td>
                    <td className="py-2 text-[#333333]">{token.qty}</td>
                    <td className="py-2 text-[#333333]">{token.balance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pie Chart for Balance Distribution */}
          <div className="bg-white mt-4 p-6 rounded-lg shadow-lg text-black w-[380px] ml-8">
            <h3 className="text-[#333B69] text-lg font-semibold mb-4">Total Balance</h3>
            <h2 className="text-2xl font-bold text-[#333B69] mb-6">${balanceData.reduce((acc, item) => acc + item.value, 0).toFixed(2)}</h2>

            <PieChart width={200} height={250} >
              <Pie
                data={balanceData}

                innerRadius={60} // Donut effect
                outerRadius={100}
                fill="#8884d8"
                paddingAngle={5}
                dataKey="value"
              >
                {balanceData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>

          </div>

          {/* transactions 2nd section */}
          <div className="absolute top-65 right-10 bg-white p-4 w-76 rounded-xl shadow-lg text-black">
            <h3 className="text-lg text-[#333B69] font-semibold mb-4">Transactions</h3>

            {/* Transactions List */}
            <div className="space-y-4">
              {transactions.map((txn, index) => (
                <div key={index} className="flex items-center space-x-4 border-b border-b-[#E7E7E7] pb-2 last:border-0">
                  {/* Icon */}
                  <div className={`${txn.iconColor} w-10 h-10 flex items-center justify-center rounded-full`}>
                    <BsGraphUp className="text-white text-lg" />
                  </div>

                  {/* Transaction Details */}
                  <div className="flex-1">
                    <h4 className="text-[#333B69] font-medium">{txn.type}</h4>
                    <p className="text-gray-500 text-xs">{txn.date}</p>
                  </div>

                  {/* Amount & Value */}
                  <div className="text-right">
                    <p className={`${txn.textColor} font-medium`}>{txn.amount}</p>
                    <p className="text-[#333B69] font-bold">{txn.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* "See All" Button */}
            <div className="mt-4 flex items-center text-[#333B69] font-medium cursor-pointer">
              <span>See all</span>
              <FaArrowRight className="ml-2" />
            </div>
          </div>

        </div>

        {/* 3rd section */}
        <div className="bg-white p-6 rounded-lg shadow-lg w-[72%] mt-8">
          <h3 className="text-lg font-semibold text-[#333B69] mb-4">
            Custom Import Tokens
          </h3>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="text-left text-[#333B69] ">
                  <th className="py-3 pl-4">NAME</th>
                  <th className="py-3">CONTACT ADDRESS</th>
                  <th className="py-3 pr-4 text-right">WORTH</th>
                </tr>
              </thead>
              <tbody>
                {tokens.map((token, index) => (
                  <tr
                    key={index}
                    className="border-b border-b-[#E7E7E7] last:border-0 hover:bg-gray-100"
                  >
                    {/* Name Column */}
                    <td className="py-4 pl-4 flex items-center space-x-3">
                      <img src={token.icon} alt={token.name} className="w-6 h-6" />
                      <div>
                        <p className="font-medium text-[#333B69]">{token.name}</p>
                        <p className="text-sm text-gray-500">{token.fullName}</p>
                      </div>
                    </td>

                    {/* Contact Address */}
                    <td className="py-4 text-gray-600">{token.address}</td>

                    {/* Worth */}
                    <td className="py-4 pr-4 text-right">
                      <p className="font-medium text-[#333B69]">{token.worth}</p>
                      <p className="text-gray-500">{token.value}</p>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Admin;
