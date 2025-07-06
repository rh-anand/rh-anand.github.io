'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center relative">
      {/* Navigation buttons on the right */}
      <div className="absolute top-8 right-8 flex space-x-4">
        <Link href="/resume">
          <button className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-200 font-medium">
            Resume
          </button>
        </Link>
        <Link href="/blog">
          <button className="px-6 py-3 border-2 border-black text-black rounded-lg hover:bg-black hover:text-white transition-colors duration-200 font-medium">
            Blog
          </button>
        </Link>
      </div>

      {/* Main content - empty as requested */}
      <div className="text-center">
        <h1 className="text-6xl font-light text-gray-900 mb-4">
          Rohan Anand
        </h1>
        <p className="text-xl text-gray-600">
          Welcome
        </p>
      </div>
    </div>
  );
}
