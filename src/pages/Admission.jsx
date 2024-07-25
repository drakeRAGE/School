
const Admissions = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-green-900 to-green-700 p-6 md:p-12 text-center text-white">
          <h1 className="text-4xl font-extrabold mb-4">Admissions at Springdale Public School</h1>
          <p className="text-lg md:text-xl">
            Discover the steps to join our community and embark on an enriching educational journey.
          </p>
        </div>

        {/* Admission Process Section */}
        <div className="p-6 md:p-12">
          <div className="bg-white shadow-lg rounded-lg p-6 mb-8 transition-transform transform hover:scale-105 hover:shadow-xl">
            <h2 className="text-3xl font-semibold mb-6 text-center border-b-2 border-gray-300 pb-4">Admission Process</h2>
            <p className="text-gray-700 mb-6 text-center">
              Our admission process is designed to be straightforward and transparent. Please follow the steps below to apply:
            </p>
            <ol className="list-decimal list-inside space-y-4 text-gray-700">
              <li className="mb-4">
                <strong>Step 1:</strong> Complete the online admission application form available below.
              </li>
              <li className="mb-4">
                <strong>Step 2:</strong> Submit all required documents, including proof of residence, previous academic records, and a recent photograph.
              </li>
              <li className="mb-4">
                <strong>Step 3:</strong> Attend the admission interview scheduled by our admissions office.
              </li>
              <li className="mb-4">
                <strong>Step 4:</strong> Await confirmation of admission and follow further instructions provided.
              </li>
            </ol>
          </div>

          {/* Downloadable Forms Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 mb-8 transition-transform transform hover:scale-105 hover:shadow-xl">
            <h2 className="text-3xl font-semibold mb-6 text-center border-b-2 border-gray-300 pb-4">Downloadable Admission Forms</h2>
            <p className="text-gray-700 mb-6 text-center">
              Please download and complete the following forms for the admission process:
            </p>
            <div className="space-y-4">
              <a href="/forms/admission-form.pdf" className="block text-teal-600 hover:underline text-center" download>
                <div className="p-4 bg-teal-100 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold">Admission Application Form</h3>
                  <p className="text-gray-600">Download and fill out the application form to start your admission process.</p>
                </div>
              </a>
              <a href="/forms/medical-form.pdf" className="block text-teal-600 hover:underline text-center" download>
                <div className="p-4 bg-teal-100 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold">Medical History Form</h3>
                  <p className="text-gray-600">Complete this form to provide your medical history.</p>
                </div>
              </a>
              <a href="/forms/consent-form.pdf" className="block text-teal-600 hover:underline text-center" download>
                <div className="p-4 bg-teal-100 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold">Consent Form</h3>
                  <p className="text-gray-600">Download this form to give your consent for the admission process.</p>
                </div>
              </a>
            </div>
          </div>

          {/* Important Dates Section */}
          <div className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
            <h2 className="text-3xl font-semibold mb-6 text-center border-b-2 border-gray-300 pb-4">Important Dates and Deadlines</h2>
            <p className="text-gray-700 mb-6 text-center">
              Keep track of the following important dates for the admission process:
            </p>
            <div className="space-y-4 text-gray-700">
              <div className="p-4 bg-gray-50 rounded-lg shadow-md">
                <strong>Application Start Date:</strong> August 1, 2024
              </div>
              <div className="p-4 bg-gray-50 rounded-lg shadow-md">
                <strong>Application Deadline:</strong> September 15, 2024
              </div>
              <div className="p-4 bg-gray-50 rounded-lg shadow-md">
                <strong>Admission Interviews:</strong> September 25 - October 5, 2024
              </div>
              <div className="p-4 bg-gray-50 rounded-lg shadow-md">
                <strong>Confirmation of Admission:</strong> October 10, 2024
              </div>
              <div className="p-4 bg-gray-50 rounded-lg shadow-md">
                <strong>Start of Academic Year:</strong> November 1, 2024
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admissions;
