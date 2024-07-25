
import { FaUserGraduate, FaUserTie } from 'react-icons/fa'; // Import icons from react-icons
import { IoMdArrowDropdown } from 'react-icons/io'; // Import dropdown icon

const Faculty = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-green-900 to-green-700 p-8 md:p-12 text-center text-white rounded-t-lg">
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
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-91r5FEcos4IqKwXybxg29wBHSjxJwrMg9Q&s'} alt="Emily Johnson" className="w-full h-56 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105" />
                <div className="p-6 relative z-10">
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900">Emily Johnson</h3>
                  <p className="text-gray-700 mb-2 text-lg">English Teacher</p>
                  <p className="text-gray-600 mb-4">
                    M.A. in English from [University]. Over 10 years of teaching experience. Passionate about literature and creative writing.
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
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQl6p-DeHg0BpTbjJeU6DH-moAyVPIaKbP8Q&s'} alt="Michael Brown" className="w-full h-56 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105" />
                <div className="p-6 relative z-10">
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900">Michael Brown</h3>
                  <p className="text-gray-700 mb-2 text-lg">Mathematics Teacher</p>
                  <p className="text-gray-600 mb-4">
                    M.Sc. in Mathematics from [University]. Over 8 years of teaching experience. Specializes in Algebra and Calculus.
                  </p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Read More</button>
                </div>
                <div className="absolute inset-0 bg-gray-800 bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                  <IoMdArrowDropdown className="text-4xl" />
                </div>
              </div>
              {/* Faculty Profile 3 */}
              <div className="relative group bg-white shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl border border-gray-200 p-4">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_IQrw76XieFRgs-Yq3J6I1B_6fBWfE2W-Jg&s'} alt="Sophia Davis" className="w-full h-56 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105" />
                <div className="p-6 relative z-10">
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900">Sophia Davis</h3>
                  <p className="text-gray-700 mb-2 text-lg">Science Teacher</p>
                  <p className="text-gray-600 mb-4">
                    M.Sc. in Chemistry from [University]. Over 12 years of teaching experience. Passionate about scientific research and education.
                  </p>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">Read More</button>
                </div>
                <div className="absolute inset-0 bg-gray-800 bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                  <IoMdArrowDropdown className="text-4xl" />
                </div>
              </div>
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
                <img src={'data:image/jpeg;base64,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'} alt="John Doe" className="w-full h-56 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105" />
                <div className="p-6 relative z-10">
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900">John Doe</h3>
                  <p className="text-gray-700 mb-2 text-lg">Principal</p>
                  <p className="text-gray-600 mb-4">
                    M.Ed. with 20 years of experience in educational administration. Dedicated to fostering a positive and productive school environment.
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
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7sMQU3AfjN9BBtPYbP2Gt8Lu2p7dAvblsgg&s'} alt="Jane Smith" className="w-full h-56 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105" />
                <div className="p-6 relative z-10">
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900">Jane Smith</h3>
                  <p className="text-gray-700 mb-2 text-lg">Vice Principal</p>
                  <p className="text-gray-600 mb-4">
                    M.Sc. in Physics with 15 years of teaching experience. Expertise in curriculum development and academic leadership.
                  </p>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">Read More</button>
                </div>
                <div className="absolute inset-0 bg-gray-800 bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                  <IoMdArrowDropdown className="text-4xl" />
                </div>
              </div>
              {/* Staff Profile 3 */}
              <div className="relative group bg-white shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl border border-gray-200 p-4">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50"></div>
                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBx4Wza9RIXWyBV-pGzaZckWlDGJVJ4qDiSQ&s'} alt="David Wilson" className="w-full h-56 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105" />
                <div className="p-6 relative z-10">
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900">David Wilson</h3>
                  <p className="text-gray-700 mb-2 text-lg">Computer Science Teacher</p>
                  <p className="text-gray-600 mb-4">
                    B.Tech in Computer Science with 5 years of teaching experience. Specializes in programming and software development.
                  </p>
                  <button className="bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500">Read More</button>
                </div>
                <div className="absolute inset-0 bg-gray-800 bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white">
                  <IoMdArrowDropdown className="text-4xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faculty;
