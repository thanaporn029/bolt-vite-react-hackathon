import React from 'react';
import { Link } from 'react-router-dom';
import { Pen, Edit3, Users, BookOpen } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Pen className="w-6 h-6 text-blue-500" />
            <span className="text-xl font-semibold">WriteWhisper</span>
          </div>
          <div className="flex gap-4">
            <Link
              to="/login"
              className="px-4 py-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Share Your Stories with the World
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            WriteWhisper is your platform to create, share, and discover amazing stories.
            Join our community of writers and readers today.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Edit3 className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Write Your Story</h3>
            <p className="text-gray-600">
              Create beautiful stories with our intuitive editor. Format your text,
              add images, and make your content shine.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <Users className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Join the Community</h3>
            <p className="text-gray-600">
              Connect with other writers, share feedback, and grow together in our
              supportive community.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <BookOpen className="w-8 h-8 text-blue-500 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Discover Stories</h3>
            <p className="text-gray-600">
              Explore a vast collection of stories from writers around the world.
              Find your next favorite read.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Link
            to="/register"
            className="inline-block px-8 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors text-lg font-semibold"
          >
            Start Writing Today
          </Link>
        </div>
      </main>
    </div>
  );
};

export default HomePage;