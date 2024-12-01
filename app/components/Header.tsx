const Header = () => {
  return (
    <div className="bg-blue-600 text-white py-4 px-6 flex justify-between items-center sticky top-0 z-10 shadow-md">
      <h1 className="text-3xl font-semibold">Quiz Grid Canvas</h1>
      <button className="bg-green-600 px-6 py-2 rounded-md font-semibold text-white hover:bg-green-500 transition-all">
        Save
      </button>
    </div>
  );
};

export default Header;
