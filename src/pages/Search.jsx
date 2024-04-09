import React from 'react';

const SearchPage = () => {
  return (
    <div className="mt-40">
      <span className="block text-center text-4xl text-white mt-8 mb-8 font-bold">MOVIES NAME</span>
      <div className="flex justify-center mt-4">
        <input
          type="text"
          className="border border-gray-300 rounded-md py-2 px-4 focus:ring-2 focus:ring-blue-500 w-1/2"
          placeholder="Enter your movie's name..."
        />
      </div>
    </div>
  );
}

export default SearchPage;
