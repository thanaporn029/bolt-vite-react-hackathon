import React from 'react';

const SocialLogin = () => {
  return (
    <div className="space-y-4">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-200"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">หรือเข้าสู่ระบบด้วย</span>
        </div>
      </div>
      <div className="flex justify-center space-x-4">
        <button className="p-2 border rounded-lg hover:bg-gray-50 transition-colors">
          <img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="Google" className="w-6 h-6" />
        </button>
        <button className="p-2 border rounded-lg hover:bg-gray-50 transition-colors">
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" alt="Facebook" className="w-6 h-6" />
        </button>
        <button className="p-2 border rounded-lg hover:bg-gray-50 transition-colors">
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/31/Apple_logo_white.svg" alt="Apple" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;