import React ,{ useState } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import "./Gallary.css";
const Gallery = () => {

const galleryItems = [
  // Example gallery items
  { id: 1, type: 'Event', date: '2024-06-15', src: 'https://www.maitreyi.ac.in/assets/front/images/mainbanner/slide1.jpg', isVideo: false },
  { id: 2, type: 'Activity', date: '2024-07-20', src: 'https://www.maitreyi.ac.in/assets/front/images/mainbanner/slide1.jpg', isVideo: true },
  { id: 3, type: 'Infrastructure', date: '2024-05-30', src: 'https://www.maitreyi.ac.in/assets/front/images/mainbanner/slide1.jpg', isVideo: false },
  // Add more items as needed
];

const images = [
    {
      original: 'https://www.maitreyi.ac.in/assets/front/images/mainbanner/slide1.jpg',
      thumbnail: 'https://www.maitreyi.ac.in/assets/front/images/mainbanner/slide1.jpg',
    },
    {
      original: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-zbb1-GsittTNBX286IEZAs8Yp9qjHXJXwaBiiIHmpiIIS7zE5K16JKE9vyfGUlSuVp0&usqp=CAU',
      thumbnail: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-zbb1-GsittTNBX286IEZAs8Yp9qjHXJXwaBiiIHmpiIIS7zE5K16JKE9vyfGUlSuVp0&usqp=CAU',
      },
     {
      original: ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzsOvwJp6il9sYQOOIrDv8BCiCPANcPSUiwEsy-v2sQhFJH_NPZwNcXlgS_IguZb5wU4U&usqp=CAU',
      thumbnail: ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzsOvwJp6il9sYQOOIrDv8BCiCPANcPSUiwEsy-v2sQhFJH_NPZwNcXlgS_IguZb5wU4U&usqp=CAU',
      },
   
  ];

  const [filterType, setFilterType] = useState('All');
  const [filterDate, setFilterDate] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = galleryItems.filter(item => 
    (filterType === 'All' || item.type === filterType) &&
    (filterDate === 'All' || item.date === filterDate)
  );

  return (
    
    <div className="bg-gray-100 py-12 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-green-900 to-green-700 p-8 md:p-12 text-center text-white rounded-t-lg">
          <h1 className="text-5xl font-extrabold mb-4">Gallery</h1>
          <p className="text-lg md:text-xl leading-relaxed">
            Explore our gallery to view photos and videos of school events, activities, and infrastructure. Use the filters to find specific content.
          </p>
        </div>

        {/* Image Gallery Section */}
        <div className="gallery">
          <ImageGallery items={images} />
        </div>

        {/* Filter Section */}
        <div className="p-6 md:p-12 bg-gray-200">
          <div className="flex flex-col md:flex-row md:justify-between mb-6">
            {/* Event Type Filter */}
            <div className="mb-4 md:mb-0">
              <label htmlFor="eventType" className="block text-lg font-semibold text-gray-800 mb-2">Event Type:</label>
              <select 
                id="eventType"
                className="border border-gray-300 rounded-md p-2 bg-white"
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Event">Event</option>
                <option value="Activity">Activity</option>
                <option value="Infrastructure">Infrastructure</option>
              </select>
            </div>

            {/* Date Filter */}
            <div>
              <label htmlFor="eventDate" className="block text-lg font-semibold text-gray-800 mb-2">Date:</label>
              <select 
                id="eventDate"
                className="border border-gray-300 rounded-md p-2 bg-white"
                value={filterDate}
                onChange={(e) => setFilterDate(e.target.value)}
              >
                <option value="All">All</option>
                <option value="2024-06-15">June 15, 2024</option>
                <option value="2024-07-20">July 20, 2024</option>
                <option value="2024-05-30">May 30, 2024</option>
                {/* Add more date options as needed */}
              </select>
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="p-6 md:p-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map(item => (
            <div key={item.id} className="relative group">
              <div className="aspect-w-16 aspect-h-9">
                {item.isVideo ? (
                  <video
                    className="w-full h-full object-cover rounded-lg cursor-pointer"
                    src={item.src}
                    onClick={() => setSelectedImage(item.src)}
                    controls
                  />
                ) : (
                  <img
                    className="w-full h-full object-cover rounded-lg cursor-pointer"
                    src={item.src}
                    alt="Gallery item"
                    onClick={() => setSelectedImage(item.src)}
                  />
                )}
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white text-lg">Click to View</span>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox for Images */}
        {/* {selectedImage && (
          <Lightbox
            mainSrc={selectedImage}
            onCloseRequest={() => setSelectedImage(null)}
          />
        )} */}
      </div>
    </div>
  );
};

export default Gallery;

