
const ContactUs = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gray-800 p-6 md:p-12 text-center text-white">
          <h1 className="text-4xl font-extrabold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl">
            We’re here to assist you. Reach out to us via the contact form below or visit us at our location. We look forward to hearing from you!
          </p>
        </div>

        {/* Contact Information and Form */}
        <div className="p-6 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Details */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <p className="text-gray-700 mb-4">
                <strong>Address:</strong> Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Phone:</strong> <a href="tel:+11234567890" className="text-blue-600 hover:text-blue-800">+1 (123) 456-7890</a>
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Email:</strong> <a href="mailto:info@springdale.edu" className="text-blue-600 hover:text-blue-800">info@springdale.edu</a>
              </p>
            </div>

            {/* Contact Form */}
            <div className="bg-white shadow-lg rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
              <form action="#" method="POST" className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                  <input type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                  <input type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                  <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">Send Message</button>
              </form>
            </div>
          </div>
        </div>

        {/* Google Maps Integration */}
        <div className="relative w-full h-96 mt-12">
          <iframe
            title="Google Maps Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.089184304866!2d-122.08424968468105!3d37.38605127982958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb5c1a061fbbf%3A0x87349e7d490c2eaf!2s123%20Education%20Ln%2C%20Cityville%2C%20State%2C%20ZIP%20Code!5e0!3m2!1sen!2sus!4v1631667325840!5m2!1sen!2sus&markers=color:red%7Clabel:%E2%80%A2%7C37.386051%2C-122.084249"
            className="absolute inset-0 w-full h-full border-0 rounded-lg shadow-lg"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
