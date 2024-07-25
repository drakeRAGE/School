import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const events = [
    {
      title: 'Annual Sports Day - Celebrating Excellence in Sports',
      description: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis laudantium
      reiciendis dolorem officiis, `,
      imgSrc:
        'https://lh5.googleusercontent.com/proxy/1P2YEpGLWLuNfisAxj_F9r694wXZ1R0onBDsrrbeyH5BULoQVQd1OCIdO1ip8UzhR8PHm555sSbkc_I2OXFhNs5R5iWCYegXhyzJNjg-Vw',
    },
    {
      title: 'Science Exhibition - Showcasing Student Innovations',
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi neque quaerat
      inventore aspernatur`,
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPIFmmqxtDMBFGWISHWrEce5jg1VUJi7ThSA&s',
    },
    {
      title: 'Cultural Fest - Embracing Diversity and Creativity',
      description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus, laudantium.
      Expedita quo deserunt quia numquam veritatis nulla aliquam voluptates, earum
      magni repellat ab, nostrum animi sapiente beatae quibusdam, qui tempora.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto sint, nulla
      modi, adipisci atque maxime aliquam officia pariatur, rem unde dignissimos!
      Nostrum quae, rem non nihil praesentium perferendis aspernatur corporis?`,
      imgSrc:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjCF73v_D7V7nlG3ZkMP6QsoUcNgdoyhDEXA&s',
    },
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page bg-gray-100">
      {/* Header Section */}
      <header className="header flex flex-col items-center mb-8 py-12 bg-white shadow-lg rounded-b-lg">
        <img
          src="https://png.pngtree.com/png-vector/20230415/ourmid/pngtree-school-logo-design-template-vector-png-image_6705854.png"
          alt="School Logo"
          className="logo w-28 h-28 mb-4"
        />
        <h1 className="text-5xl font-extrabold mb-2 text-gray-800">Welcome to Springdale School</h1>
        <p className="text-xl text-gray-500">Building Tomorrow's Leaders Today.</p>
      </header>

      {/* Carousel */}
      <div className="carousel w-full h-screen overflow-hidden relative mb-12">
        <div
          className="carousel-inner flex transition-transform duration-700"
          style={{ transform: `translateX(-${activeIndex * 100}%)` }}
        >
          {events.map((event, index) => (
            <div
              key={index}
              className="carousel-item flex-none w-full h-full relative"
            >
              <img
                src={event.imgSrc}
                alt={event.title}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <button
          className="prev absolute top-1/2 left-6 transform -translate-y-1/2 bg-white rounded-full p-3 text-black hover:bg-gray-200 focus:outline-none"
          onClick={handlePrev}
        >
          &#8249;
        </button>
        <button
          className="next absolute top-1/2 right-6 transform -translate-y-1/2 bg-white rounded-full p-3 text-black hover:bg-gray-200 focus:outline-none"
          onClick={handleNext}
        >
          &#8250;
        </button>
      </div>
      
      {/* Programs Section */}
      <section className="programs py-16 bg-gray-200 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-12 text-gray-800">Our Programs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="program bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDR8fHNjaG9vbHxlbnwwfHx8fDE2OTAyMTIwNDU&ixlib=rb-1.2.1&q=80&w=1080"
                alt="STEM"
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">STEM Education</h3>
              <p className="text-gray-700">
                Discover the wonders of science, technology, engineering, and math with hands-on activities and real-world applications.
              </p>
            </div>
            <div className="program bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJznnb6l-AgxGb7G9nSCTsSe6RGNSLLGCI9Q&s"
                alt="Arts"
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">Arts & Music</h3>
              <p className="text-gray-700">
                Nurture your creativity with programs in visual arts, music, and performance that inspire and engage.
              </p>
            </div>
            <div className="program bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaqKhMzmXGiaXND8Cl4bn0Yda2vWGzwg6OzQ&s"
                alt="Sports"
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-2xl font-semibold mb-2 text-gray-800">Sports & Fitness</h3>
              <p className="text-gray-700">
                Stay active and healthy with our diverse sports and fitness programs designed for all skill levels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials py-16 bg-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-12 text-gray-800">What Our Community Says</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="testimonial bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <p className="text-gray-700 mb-4">
                "Coding School has transformed my learning experience. The teachers are supportive, and the community is welcoming. I've learned so much in such a short time!"
              </p>
              <h4 className="text-xl font-semibold text-gray-800">- Alex Johnson, Student</h4>
            </div>
            <div className="testimonial bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <p className="text-gray-700 mb-4">
                "As a parent, I am thrilled with the opportunities my child has at Coding School. The diverse programs and dedicated staff make this school truly special."
              </p>
              <h4 className="text-xl font-semibold text-gray-800">- Maria Smith, Parent</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="quick-links py-16 bg-white text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold mb-12 text-gray-800">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <Link to='/admission'>
              <div className="quick-link bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">Admissions</h3>
                <p className="text-gray-700">Learn about our admissions process and apply today.</p>
              </div>
            </Link>
            <Link to='/faculty'>
              <div className="quick-link bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">Programs</h3>
                <p className="text-gray-700">Explore our diverse range of programs and find the right fit for you.</p>
              </div>
            </Link>
            <Link to='/contact'>
              <div className="quick-link bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-2xl font-semibold mb-2 text-gray-800">Contact Us</h3>
                <p className="text-gray-700">Get in touch with us for more information or assistance.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
