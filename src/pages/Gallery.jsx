import { useState } from 'react';
import { FaPhotoVideo, FaVideo } from 'react-icons/fa'; // Importing icons for visual enhancement

const Gallery = () => {
  // State for filtering photos and videos
  const [photoFilter, setPhotoFilter] = useState('all');
  const [videoFilter, setVideoFilter] = useState('all');

  // Data for photos
  const photos = [
    {
      src: 'https://bangaloreinternationalschool.org/wp-content/uploads/2022/04/Bis-Sports-day-11-min-1024x683.jpg',
      alt: 'Students participating in various sports events.',
      date: '2024-06-15',
      eventType: 'Sports Day',
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2KIE58soDTlkbcnK7rbPK8VscLWqko9gL7Q&s',
      alt: 'Students presenting their science projects.',
      date: '2024-05-20',
      eventType: 'Science Exhibition',
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcGMO4-lblawwkd1Lh-rNLRnlYTy4Oek_dgg&s',
      alt: 'Students performing in the cultural fest.',
      date: '2024-04-25',
      eventType: 'Cultural Fest',
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOUuzs-hMDYE9_k7c6zDp-9D3EI3pRU4kj1w&s',
      alt: 'A glimpse of our interactive classrooms.',
      date: '2024-03-10',
      eventType: 'Classroom',
    },
    {
      src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh_kfuHmPz96vVcYiIGdS8mU3UpeKC38I_WA&s',
      alt: 'Students reading and studying in the school library.',
      date: '2024-02-18',
      eventType: 'Library',
    },
  ];

  // Data for videos
  const videos = [
    {
      src: 'school_tour.mp4',
      alt: 'Virtual tour of Springdale Public School.',
      date: '2024-01-15',
      eventType: 'School Tour',
    },
    {
      src: 'annual_function.mp4',
      alt: 'Highlights from the Annual Function 2023.',
      date: '2023-12-10',
      eventType: 'Annual Function',
    },
  ];

  // Filtered photos and videos based on current filter
  const filteredPhotos = photos.filter((photo) => {
    if (photoFilter === 'all') return true;
    return photo.eventType === photoFilter;
  });

  const filteredVideos = videos.filter((video) => {
    if (videoFilter === 'all') return true;
    return video.eventType === videoFilter;
  });

  // Unique event types for filter options
  const photoEventTypes = [...new Set(photos.map((photo) => photo.eventType))];
  const videoEventTypes = [...new Set(videos.map((video) => video.eventType))];

  return (
    <div className="bg-gradient-to-r from-green-50 via-green-100 to-green-200 py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-green-900 to-green-700 p-8 md:p-12 text-center text-white rounded-t-lg">
          <h1 className="text-5xl font-extrabold mb-4">
            <FaPhotoVideo className="inline-block mr-2 text-yellow-300 text-4xl" />
            Gallery
          </h1>
          <p className="text-lg md:text-xl leading-relaxed">
            Photo and video gallery showcasing school events, activities, and infrastructure.
          </p>
        </div>

        {/* Photos Section */}
        <div className="p-6 md:p-12">
          <h2 className="text-4xl font-semibold mb-8 text-center text-gray-800 relative border-b-4 border-blue-600 pb-4">
            {/* <FaPhoto className="inline-block mr-2 text-blue-600 text-3xl" /> */}
            Photos
            <div className="absolute inset-x-0 bottom-0 h-1 bg-blue-600"></div>
          </h2>

          {/* Filter Buttons for Photos */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              className={`py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none ${photoFilter === 'all' ? 'border-b-4 border-blue-800' : ''}`}
              onClick={() => setPhotoFilter('all')}
            >
              All
            </button>
            {photoEventTypes.map((eventType) => (
              <button
                key={eventType}
                className={`py-2 px-4 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none ${photoFilter === eventType ? 'border-b-4 border-gray-600' : ''}`}
                onClick={() => setPhotoFilter(eventType)}
              >
                {eventType}
              </button>
            ))}
          </div>

          {/* Display Photos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredPhotos.map((photo, index) => (
              <div
                key={index}
                className="relative group bg-white shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl border border-gray-200"
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-56 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{photo.eventType}</h3>
                  <p className="text-gray-600 mb-4">{photo.alt}</p>
                  <p className="text-sm text-gray-500">Date: {photo.date}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Videos Section */}
          <h2 className="text-4xl font-semibold mb-8 text-center text-gray-800 relative border-b-4 border-green-600 pb-4">
            <FaVideo className="inline-block mr-2 text-green-600 text-3xl" />
            Videos
            <div className="absolute inset-x-0 bottom-0 h-1 bg-green-600"></div>
          </h2>

          {/* Filter Buttons for Videos */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <button
              className={`py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none ${videoFilter === 'all' ? 'border-b-4 border-green-800' : ''}`}
              onClick={() => setVideoFilter('all')}
            >
              All
            </button>
            {videoEventTypes.map((eventType) => (
              <button
                key={eventType}
                className={`py-2 px-4 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 focus:outline-none ${videoFilter === eventType ? 'border-b-4 border-gray-600' : ''}`}
                onClick={() => setVideoFilter(eventType)}
              >
                {eventType}
              </button>
            ))}
          </div>

          {/* Display Videos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVideos.map((video, index) => (
              <div
                key={index}
                className="relative group bg-white shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl border border-gray-200"
              >
                <video
                  src={video.src}
                  controls
                  className="w-full h-56 object-cover rounded-t-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">{video.eventType}</h3>
                  <p className="text-gray-600 mb-4">{video.alt}</p>
                  <p className="text-sm text-gray-500">Date: {video.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
