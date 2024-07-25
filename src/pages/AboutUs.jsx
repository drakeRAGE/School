import React from 'react';
// import schoolHistoryImage from './images/school-history.jpg'; // Replace with your image paths
// import principalMessageImage from './images/principal-message.jpg'; // Replace with your image paths
// import facilitiesImage from './images/facilities.jpg'; // Replace with your image paths

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-green-900 to-green-700 p-8 md:p-12 p-6 md:p-12 text-center text-white">
          <h1 className="text-4xl font-extrabold mb-4">About Us</h1>
          <p className="text-lg md:text-xl">
            Learn more about our history, vision, mission, and the values that drive us. Discover the facilities and the commitment of our leadership towards creating a thriving educational environment.
          </p>
        </div>

        
      <section className="history-and-vision py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Our History & Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="history bg-gray-200 p-6 rounded-lg shadow-lg flex flex-col items-center">
              <img
                src="https://www.maitreyi.ac.in/assets/front/images/mainbanner/slide1.jpg"
                alt="History"
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-2xl font-semibold mb-4">Our History</h3>
              <p className="text-gray-700 text-center">
                Established in 1985, our school has a rich history of academic excellence and community involvement. We have continuously evolved to meet the changing needs of our students and the educational landscape.
              </p>
            </div>
            <div className="vision bg-gray-200 p-6 rounded-lg shadow-lg flex flex-col items-center">
              <img
                src="https://www.w3schools.com/w3images/education.jpg"
                alt="Vision"
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-2xl font-semibold mb-4">Our Vision & Mission</h3>
              <p className="text-gray-700 text-center">
                Our vision is to create a nurturing and innovative learning environment. We are dedicated to inspiring students to achieve their highest potential and become leaders of tomorrow.
              </p>
              <p className="text-gray-700 text-center mt-4">
                Our mission is to foster an environment of growth and learning, providing quality education and nurturing the future leaders of tomorrow.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="message-from-principal py-12 bg-gray-200">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">Message from the Principal</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg mx-auto max-w-2xl">
            <img
              src="https://images.unsplash.com/photo-1562760466-cce511340a2e"
              alt="Principal"
              className="w-24 h-24 mx-auto mb-4 rounded-full object-cover border-4 border-gray-200"
            />
            <h3 className="text-2xl font-semibold mb-4">Dr. Jane Smith</h3>
            <p className="text-gray-700">
              "Welcome to our school! We are dedicated to providing an exceptional learning environment that supports and nurtures every student. Our commitment to excellence and continuous improvement drives us to create a thriving educational experience. We look forward to partnering with you on this exciting journey."
            </p>
          </div>
        </div>
      </section>

      <section className="infrastructure py-12 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Infrastructure & Facilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="facility bg-gray-200 p-6 rounded-lg shadow-lg flex flex-col items-center">
              <img
                src="https://images.unsplash.com/photo-1562906283-9e5b5bfa9c7f"
                alt="Classrooms"
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold mb-4">State-of-the-Art Classrooms</h3>
              <p className="text-gray-700 text-center">
                Our modern classrooms are equipped with the latest technology to facilitate interactive and engaging learning experiences for our students.
              </p>
            </div>
            <div className="facility bg-gray-200 p-6 rounded-lg shadow-lg flex flex-col items-center">
              <img
                src="https://images.unsplash.com/photo-1575861540076-70dcf0d0e7b4"
                alt="Laboratories"
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold mb-4">Well-Equipped Laboratories</h3>
              <p className="text-gray-700 text-center">
                We offer advanced science and computer laboratories to support hands-on learning and practical application of knowledge.
              </p>
            </div>
            <div className="facility bg-gray-200 p-6 rounded-lg shadow-lg flex flex-col items-center">
              <img
                src="https://www.maitreyi.ac.in/assets/front/images/mainbanner/slide1.jpg"
                alt="Recreational Areas"
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold mb-4">Recreational Areas</h3>
              <p className="text-gray-700 text-center">
                Our campus features spacious recreational areas, including sports fields, a gymnasium, and a library, to promote physical activity and well-rounded development.
              </p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
};

export default AboutUs;
