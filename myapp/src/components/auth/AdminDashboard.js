import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [adminName, setAdminName] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Get the admin name from the stored token or any other method
    const adminToken = localStorage.getItem('adminToken');
    if (adminToken) {
      // Assuming the token contains the admin's name (or fetch it from the server)
      // For demonstration, using a placeholder name
      setAdminName('Denis Murangiri');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/');
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div
        className={`bg-gradient-to-b from-indigo-600 to-blue-700 text-white w-64 ${isSidebarOpen ? 'block' : 'hidden'} lg:block transform transition-all duration-300 ease-in-out ${
          isSidebarOpen ? 'scale-100' : 'scale-95'
        }`}
        onMouseEnter={() => setIsSidebarOpen(true)}
        onMouseLeave={() => setIsSidebarOpen(false)}
      >
        <div className="p-4">
          <h2 className="text-2xl font-bold">Admin Dashboard</h2>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="lg:hidden mt-4 bg-indigo-500 p-2 rounded hover:bg-indigo-600"
          >
            Toggle Sidebar
          </button>
        </div>
        <nav className="mt-6">
          <ul>
            
            <li>
              <a
                href="/admin/users"
                className="block px-4 py-2 hover:bg-indigo-500 rounded text-lg font-medium transition duration-200"
              >
               Manage Users
              </a>
            </li>
            <li>
              <a
                href="/admin/settings"
                className="block px-4 py-2 hover:bg-indigo-500 rounded text-lg font-medium transition duration-200"
              >
                Settings
              </a>
            </li>
            
            
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100">
        {/* Top Right - Admin Name & Logout */}
        <div className="flex justify-between items-center mb-4">
          <div className="text-xl font-semibold text-gray-800">Dashboard</div>
          <div className="flex items-center space-x-4">
            <span className="text-lg font-medium text-gray-700">Welcome, {adminName}</span>
            <button
              onClick={handleLogout}
              className="text-red-600 font-medium px-4 py-2 border border-red-600 rounded hover:bg-red-600 hover:text-white transition duration-200"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Dashboard Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <div className="bg-gradient-to-r from-green-400 to-teal-500 text-white p-4 rounded-lg shadow hover:scale-105 transform transition duration-300">
            <h4 className="text-lg font-medium">Total Users</h4>
            <p className="text-3xl font-semibold">48</p>
          </div>
          <div className="bg-gradient-to-r from-yellow-400 to-red-500 text-white p-4 rounded-lg shadow hover:scale-105 transform transition duration-300">
            <h4 className="text-lg font-medium">Active Sessions</h4>
            <p className="text-3xl font-semibold">13</p>
          </div>
          <div className="bg-gradient-to-r from-blue-400 to-purple-500 text-white p-4 rounded-lg shadow hover:scale-105 transform transition duration-300">
            <h4 className="text-lg font-medium">System Health</h4>
            <p className="text-3xl font-semibold">Good</p>
          </div>
        </div>

        {/* Charts and Graphs */}
        <div className="bg-white p-4 rounded-lg shadow mt-6">
          <h4 className="text-lg font-medium text-gray-800">User Growth Over Time</h4>
          {/* Insert chart component here */}
        </div>

        {/* Recent Activities */}
        <div className="bg-white p-4 rounded-lg shadow mt-6">
          <h4 className="text-lg font-medium text-gray-800">Recent Activities</h4>
          <ul>
            <li className="border-b py-2 text-gray-600">{adminName} logged in</li>

          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
