
const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-green-900 to-green-700 p-6 md:p-12 text-center text-white">
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
              <p className="text-gray-700 text-center">Founded in 1985, Springdale Public School has been dedicated to providing
quality education and holistic development to students.
              </p>
            </div>
            <div className="vision bg-gray-200 p-6 rounded-lg shadow-lg flex flex-col items-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu-tK9AL2RCeCQA0-cty3A1eb0TMWmpR7wNg&s"
                alt="Vision"
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-2xl font-semibold mb-4">Our Vision & Mission</h3>
              <p className="text-gray-700 text-center">
                To create a learning environment that fosters academic excellence, critical
thinking, and ethical values.
              </p>
              <p className="text-gray-700 text-center mt-4">
                To empower students with the knowledge, skills, and values needed to thrive
in a dynamic world.
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
              src="https://www.inspirationschoolkgm.org/images/MrAnurag%20Mathur2022_HOME.jpg"

              alt="Principal"
              className="w-24 h-24 mx-auto mb-4 rounded-full object-cover border-4 border-gray-200"
            />
            <h3 className="text-2xl font-semibold mb-4">Dr. Jane Smith</h3>
            <p className="text-gray-700">
              "At Springdale, we believe in nurturing the potential of every
student and guiding them towards a successful future."
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
                src="https://media.istockphoto.com/id/1005282482/photo/large-group-of-elementary-students-having-an-art-class-in-the-classroom.jpg?s=612x612&w=0&k=20&c=6141RFZjv_WlL-p4fVl15DV9zpSpJPnWnms6e-Mr_zI="
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTRT-XH2GEXRGqZGnMnoyrh_cIod0CuEM0gA&s"
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUhhuGXLUD9L4456kTFhUIsChmUQN1l1dj5A&s"
                alt="Recreational Areas"
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-xl font-semibold mb-4">Sports Facility</h3>
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
