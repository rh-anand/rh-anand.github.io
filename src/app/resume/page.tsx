'use client';

import Link from 'next/link';

export default function Resume() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <div className="absolute top-8 right-8 flex space-x-4">
        <Link href="/">
          <button className="px-6 py-3 border-2 border-black text-black rounded-lg hover:bg-black hover:text-white transition-colors duration-200 font-medium">
            Home
          </button>
        </Link>
        <Link href="/blog">
          <button className="px-6 py-3 border-2 border-black text-black rounded-lg hover:bg-black hover:text-white transition-colors duration-200 font-medium">
            Blog
          </button>
        </Link>
      </div>

      {/* Resume Content */}
      <div className="max-w-4xl mx-auto px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-light text-gray-900 mb-4">
            Rohan Anand
          </h1>
          <p className="text-xl text-gray-600">
            Software Engineer
          </p>
        </div>

        <div className="space-y-12">
          {/* Contact Info */}
          <section>
            <h2 className="text-2xl font-medium text-gray-900 mb-4">Contact</h2>
            <div className="space-y-2 text-gray-700">
              <p>Email: rohan@example.com</p>
              <p>LinkedIn: linkedin.com/in/rohananand</p>
              <p>GitHub: github.com/rohananand</p>
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-2xl font-medium text-gray-900 mb-6">Experience</h2>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-medium text-gray-900">Senior Software Engineer</h3>
                  <span className="text-gray-600">2022 - Present</span>
                </div>
                <p className="text-gray-700 mb-2">Tech Company Inc.</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Led development of scalable web applications using React and Node.js</li>
                  <li>Mentored junior developers and conducted code reviews</li>
                  <li>Implemented CI/CD pipelines and improved deployment processes</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-medium text-gray-900">Software Engineer</h3>
                  <span className="text-gray-600">2020 - 2022</span>
                </div>
                <p className="text-gray-700 mb-2">Startup XYZ</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Built full-stack applications using modern web technologies</li>
                  <li>Collaborated with design and product teams to deliver features</li>
                  <li>Optimized application performance and user experience</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-2xl font-medium text-gray-900 mb-4">Education</h2>
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-medium text-gray-900">Bachelor of Science in Computer Science</h3>
                <span className="text-gray-600">2016 - 2020</span>
              </div>
              <p className="text-gray-700">University of Technology</p>
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-2xl font-medium text-gray-900 mb-4">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Frontend</h4>
                <p className="text-gray-700">React, Next.js, TypeScript, Tailwind CSS</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Backend</h4>
                <p className="text-gray-700">Node.js, Python, PostgreSQL, MongoDB</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Tools</h4>
                <p className="text-gray-700">Git, Docker, AWS, CI/CD</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 