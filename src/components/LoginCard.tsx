import React from 'react';
import LoginForm from './LoginForm';
import SocialLogin from './SocialLogin';
import { Pen } from 'lucide-react';
import { Link } from 'react-router-dom';

const LoginCard = () => {
  return (
    <div className="w-full max-w-md">
      <div className="flex items-center gap-2 mb-6">
        <Pen className="w-6 h-6" />
        <h1 className="text-xl font-semibold">WriteWhisper</h1>
      </div>
      <h2 className="text-2xl font-bold mb-6">Welcome back!</h2>
      <LoginForm />
      <div className="mt-6">
        <SocialLogin />
      </div>
      <div className="mt-6 text-center text-sm">
        <span className="text-gray-600">Don't have an account? </span>
        <Link to="/register" className="text-blue-500 hover:text-blue-600 font-semibold">
          Register Now
        </Link>
      </div>
    </div>
  );
};

export default LoginCard;