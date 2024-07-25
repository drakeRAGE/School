import React from 'react';
// import facultyImage from './images/faculty.jpg'; // Replace with your image paths
import { FaUserGraduate, FaUserTie } from 'react-icons/fa'; // Import icons from react-icons
import { IoMdArrowDropdown } from 'react-icons/io'; // Import dropdown icon

const Faculty = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-green-900 to-green-700 p-8 md:p-12 p-8 md:p-12 text-center text-white rounded-t-lg">
          <h1 className="text-5xl font-extrabold mb-4">Meet Our Faculty</h1>
          <p className="text-lg md:text-xl leading-relaxed">
            Meet the dedicated professionals who bring their expertise and passion to our school. Discover their qualifications and experience.
          </p>
        </div>

        {/* Tabs for Staff Sections */}
        <div className="p-6 md:p-12">
          <div className="flex mb-8">
            <button className="flex-1 py-3 px-6 bg-blue-600 text-white rounded-t-lg border-b-4 border-blue-800 focus:outline-none">Teaching Staff</button>
            <button className="flex-1 py-3 px-6 bg-gray-200 text-gray-800 rounded-t-lg border-b-4 border-gray-300 focus:outline-none">Administrative Staff</button>
          </div>

          {/* Teaching Staff Section */}
          <div className="mb-16">
            <h2 className="text-4xl font-semibold mb-8 text-center text-gray-800 relative border-b-4 border-blue-600 pb-4">
              <FaUserGraduate className="inline-block mr-2 text-blue-600 text-3xl" />
              Teaching Staff
              <div className="absolute inset-x-0 bottom-0 h-1 bg-blue-600"></div>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Faculty Profile 1 */}
              <div className="relative group bg-white shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl border border-gray-200 p-4">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
                <img src={'https://www.maitreyi.ac.in/assets/front/images/mainbanner/slide1.jpg'} alt="Dr. John Smith" className="w-full h-56 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105" />
                <div className="p-6 relative z-10">
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900">Dr. John Smith</h3>
                  <p className="text-gray-700 mb-2 text-lg">Head of Mathematics Department</p>
                  <p className="text-gray-600 mb-4">
                    Ph.D. in Mathematics from [University]. Over 15 years of teaching experience in various institutions. Specializes in Algebra and Calculus.
                  </p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Read More</button>
                </div>
                <div className="absolute inset-0 bg-gray-800 bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                  <IoMdArrowDropdown className="text-4xl" />
                </div>
              </div>
              {/* Faculty Profile 2 */}
              <div className="relative group bg-white shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl border border-gray-200 p-4">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
                <img src={'https://www.maitreyi.ac.in/assets/front/images/mainbanner/slide1.jpg'} alt="Ms. Emily Davis" className="w-full h-56 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105" />
                <div className="p-6 relative z-10">
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900">Ms. Emily Davis</h3>
                  <p className="text-gray-700 mb-2 text-lg">English Language and Literature Teacher</p>
                  <p className="text-gray-600 mb-4">
                    M.A. in English Literature from [University]. Over 10 years of experience in teaching and curriculum development. Passionate about literature and creative writing.
                  </p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Read More</button>
                </div>
                <div className="absolute inset-0 bg-gray-800 bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                  <IoMdArrowDropdown className="text-4xl" />
                </div>
              </div>
              {/* Add more profiles as needed */}
            </div>
          </div>

          {/* Administrative Staff Section */}
          <div>
            <h2 className="text-4xl font-semibold mb-8 text-center text-gray-800 relative border-b-4 border-green-600 pb-4">
              <FaUserTie className="inline-block mr-2 text-green-600 text-3xl" />
              Administrative Staff
              <div className="absolute inset-x-0 bottom-0 h-1 bg-green-600"></div>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {/* Staff Profile 1 */}
              <div className="relative group bg-white shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl border border-gray-200 p-4">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
                <img src={'https://www.maitreyi.ac.in/assets/front/images/mainbanner/slide1.jpg'} alt="Mr. Michael Johnson" className="w-full h-56 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105" />
                <div className="p-6 relative z-10">
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900">Mr. Michael Johnson</h3>
                  <p className="text-gray-700 mb-2 text-lg">Principal</p>
                  <p className="text-gray-600 mb-4">
                    M.Ed. from [University] with over 20 years of experience in educational leadership. Committed to creating an inclusive and productive school environment.
                  </p>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">Read More</button>
                </div>
                <div className="absolute inset-0 bg-gray-800 bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                  <IoMdArrowDropdown className="text-4xl" />
                </div>
              </div>
              {/* Staff Profile 2 */}
              <div className="relative group bg-white shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl border border-gray-200 p-4">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
                <img src={'https://www.maitreyi.ac.in/assets/front/images/mainbanner/slide1.jpg'} alt="Ms. Sarah Brown" className="w-full h-56 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105" />
                <div className="p-6 relative z-10">
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900">Ms. Sarah Brown</h3>
                  <p className="text-gray-700 mb-2 text-lg">Administrative Manager</p>
                  <p className="text-gray-600 mb-4">
                    B.A. in Business Administration from [University]. Experienced in managing school operations and coordinating between departments to ensure efficient workflows.
                  </p>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">Read More</button>
                </div>
                <div className="absolute inset-0 bg-gray-800 bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                  <IoMdArrowDropdown className="text-4xl" />
                </div>
              </div>
              {/* Add more profiles as needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
