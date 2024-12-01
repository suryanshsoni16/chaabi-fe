import { useState } from "react";
import Header from "~/components/Header";
import Sidebar from "~/components/Sidebar";
import GridCanvas from "~/components/GridCanvas";

const AdminPanel = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      <div className="flex flex-1">
        {/* Sidebar */}
        <div
          className={`lg:block bg-gray-800 text-white p-4 w-64 h-full transition-all duration-300 ${
            sidebarOpen ? "block" : "hidden lg:block"
          }`}
        >
          <Sidebar />
        </div>

        {/* Grid Canvas */}
        <div className="flex-grow p-6 overflow-auto bg-gray-100">
          <GridCanvas />
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
