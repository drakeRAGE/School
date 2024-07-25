import React from 'react';
// import studentLifeImage from './images/student-life.jpg'; // Replace with your image paths
// import achievementsImage from './images/achievements.jpg'; // Replace with your image paths
// import councilImage from './images/student-council.jpg'; // Replace with your image paths

const Students = () => {
  return (
    <div className="bg-gradient-to-r from-green-50 via-green-100 to-green-200 py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-green-900 to-green-700 p-8 md:p-12 text-center text-white rounded-t-lg">
          <h1 className="text-5xl font-extrabold mb-4">Student Life at Springdale Public School</h1>
          <p className="text-lg md:text-xl leading-relaxed">
            Discover the vibrant life of our students, including their extracurricular pursuits, remarkable achievements, and leadership opportunities.
          </p>
        </div>

        {/* Student Life Section */}
        <div className="p-6 md:p-12">
          <h2 className="text-4xl font-semibold mb-8 text-center text-gray-800 relative border-b-4 border-green-600 pb-4">
            Student Life
            <div className="absolute inset-x-0 bottom-0 h-1 bg-green-600"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Extracurricular Activities Card */}
            <div className="bg-white shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl border border-gray-200">
              <img src={'https://www.maitreyi.ac.in/assets/front/images/mainbanner/slide1.jpg'} alt="Extracurricular Activities" className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Extracurricular Activities</h3>
                <p className="text-gray-700 mb-4">
                  Our students engage in a wide range of extracurricular activities including sports, arts, and community service, which contribute to their overall development.
                </p>
              </div>
            </div>
            {/* Clubs Card */}
            <div className="bg-white shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl border border-gray-200">
              <img src={'https://www.example.com/clubs.jpg'} alt="Clubs and Societies" className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Clubs and Societies</h3>
                <p className="text-gray-700 mb-4">
                  Our diverse range of clubs and societies allows students to explore their interests and develop new skills, from debate and drama to coding and environmental activism.
                </p>
              </div>
            </div>
            {/* Societies Card */}
            <div className="bg-white shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl border border-gray-200">
              <img src={'https://www.example.com/societies.jpg'} alt="Student Societies" className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Student Societies</h3>
                <p className="text-gray-700 mb-4">
                  Join one of our student societies to connect with like-minded peers and contribute to various school initiatives and community projects.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="bg-white py-12 px-6 md:px-12">
          <h2 className="text-4xl font-semibold mb-8 text-center text-gray-800 relative border-b-4 border-blue-600 pb-4">
            Achievements and Accolades
            <div className="absolute inset-x-0 bottom-0 h-1 bg-blue-600"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Achievement Card 1 */}
            <div className="bg-white shadow-xl rounded-lg p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 text-blue-600 p-4 rounded-full mr-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">National Science Fair Winner</h3>
              </div>
              <p className="text-gray-700">
                Our students achieved first place in the National Science Fair with their innovative project on renewable energy solutions.
              </p>
            </div>
            {/* Achievement Card 2 */}
            <div className="bg-white shadow-xl rounded-lg p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 text-green-600 p-4 rounded-full mr-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">State Basketball Champions</h3>
              </div>
              <p className="text-gray-700">
                Our basketball team won the state championship, showcasing teamwork, skill, and dedication throughout the season.
              </p>
            </div>
            {/* Achievement Card 3 */}
            <div className="bg-white shadow-xl rounded-lg p-6 border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 text-red-600 p-4 rounded-full mr-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Art Competition First Prize</h3>
              </div>
              <p className="text-gray-700">
                Our student won the first prize in the regional art competition with their stunning painting on environmental conservation.
              </p>
            </div>
          </div>
        </div>

        {/* Student Council Section */}
        <div className="bg-gray-100 py-12 px-6 md:px-12">
          <h2 className="text-4xl font-semibold mb-8 text-center text-gray-800 relative border-b-4 border-purple-600 pb-4">
            Student Council and Leadership
            <div className="absolute inset-x-0 bottom-0 h-1 bg-purple-600"></div>
          </h2>
          <div className="text-center">
            <div className="mb-8">
              <img src={'https://www.maitreyi.ac.in/assets/front/images/mainbanner/slide1.jpg'} alt="Student Council" className="w-full h-56 object-cover rounded-lg mb-6" />
              <p className="text-gray-700 mb-4">
                The Student Council provides leadership opportunities for students to develop their skills and contribute to school life. Members are involved in organizing events, representing their peers, and making a positive impact on the school community.
              </p>
              <a href="/apply" className="bg-purple-600 text-white px-6 py-3 rounded-md text-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500">Apply for Student Council</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Students;
