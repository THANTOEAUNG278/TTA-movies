const Tomove = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-lg">

        <div className="mt-4 px-4 py-10 bg-gray-800 rounded-lg">
          <h1 className="text-lg font-semibold text-white">Movie Title</h1>
          <p className="text-gray-400 mt-1">Movie Description</p>
          <div className="flex justify-between items-center mt-2">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg ">Play</button>
            <div className="text-gray-400">Duration: 2:30:00</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tomove;
