import React from 'react';

const Login = () => {
  return (
    <div className="bg-[#0f2f62] h-screen flex items-center justify-center mt-16">
      <div className="max-w-md w-full bg-gray-100 p-8 rounded shadow-md mb-36">
        <h2 className="text-2xl mb-4 text-center font-bold">Login</h2>
        <form action="#" method="POST">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
            <input type="email" id="email" name="email" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your email" />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input type="password" id="password" name="password" className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" placeholder="Enter your password" />
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Login</button>
            <a href="#" className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">Forgot Password?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
