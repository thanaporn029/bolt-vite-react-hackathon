import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import LoginCard from './components/LoginCard';
import RegisterCard from './components/RegisterCard';
import HomePage from './components/HomePage';
import { X } from 'lucide-react';

function AuthLayout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="relative flex w-full max-w-[1000px] h-[600px] bg-white rounded-2xl shadow-xl overflow-hidden">
        <button
          onClick={() => navigate('/')}
          className="absolute top-4 right-4 p-1 hover:bg-gray-100 rounded-full transition-colors z-10"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>
        <div className="hidden md:block w-1/2 h-full">
          <img
            src="https://images.unsplash.com/photo-1612012460576-5d51b5b04b00?q=80&w=1000&auto=format&fit=crop"
            alt="Login illustration"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center p-8">
          {children}
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<AuthLayout><LoginCard /></AuthLayout>} />
        <Route path="/register" element={<AuthLayout><RegisterCard /></AuthLayout>} />
      </Routes>
    </Router>
  );
}

export default App;