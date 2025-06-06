import React, { useState, useEffect } from 'react';
import { Filter, Search, TruckIcon, PackageOpen } from 'lucide-react';
import CTAButton from '../components/CTAButton';

interface Load {
  id: string;
  origin: string;
  destination: string;
  distance: string;
  rate: string;
  weight: string;
  type: string;
  date: string;
}

const DispatchPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Dispatch Services - XFFS';
  }, []);

  // Mock data for loads
  const mockLoads: Load[] = [
    {
      id: '1001',
      origin: 'Chicago, IL',
      destination: 'Detroit, MI',
      distance: '282 miles',
      rate: '$850',
      weight: '12,000 lbs',
      type: 'Dry Van',
      date: '2025-06-05',
    },
    {
      id: '1002',
      origin: 'Atlanta, GA',
      destination: 'Nashville, TN',
      distance: '248 miles',
      rate: '$780',
      weight: '8,500 lbs',
      type: 'Refrigerated',
      date: '2025-06-05',
    },
    {
      id: '1003',
      origin: 'Dallas, TX',
      destination: 'Houston, TX',
      distance: '239 miles',
      rate: '$650',
      weight: '15,000 lbs',
      type: 'Flatbed',
      date: '2025-06-06',
    },
    {
      id: '1004',
      origin: 'Los Angeles, CA',
      destination: 'Phoenix, AZ',
      distance: '373 miles',
      rate: '$950',
      weight: '22,000 lbs',
      type: 'Dry Van',
      date: '2025-06-06',
    },
    {
      id: '1005',
      origin: 'Seattle, WA',
      destination: 'Portland, OR',
      distance: '174 miles',
      rate: '$580',
      weight: '9,800 lbs',
      type: 'Refrigerated',
      date: '2025-06-07',
    },
    {
      id: '1006',
      origin: 'Miami, FL',
      destination: 'Orlando, FL',
      distance: '236 miles',
      rate: '$680',
      weight: '14,200 lbs',
      type: 'Flatbed',
      date: '2025-06-07',
    },
  ];

  const [loads, setLoads] = useState<Load[]>(mockLoads);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Handle search and filtering
  useEffect(() => {
    let filteredLoads = mockLoads;
    
    if (searchTerm) {
      filteredLoads = filteredLoads.filter(load => 
        load.origin.toLowerCase().includes(searchTerm.toLowerCase()) || 
        load.destination.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedType) {
      filteredLoads = filteredLoads.filter(load => load.type === selectedType);
    }
    
    setLoads(filteredLoads);
  }, [searchTerm, selectedType]);

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedType('');
    setLoads(mockLoads);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="bg-gradient-primary text-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-white mb-6">Professional Dispatch Services</h1>
            <p className="text-lg mb-8">
              Our dispatch services help you find the most profitable loads and optimize your routes. Let our experienced team handle your dispatch needs so you can focus on driving.
            </p>
            <CTAButton 
              text="Contact Our Dispatch Team" 
              to="/contact" 
              variant="primary"
              className="bg-white text-purple-pain hover:bg-ice-cold hover:text-charcoal"
            />
          </div>
        </div>
      </section>

      {/* Load Board Section */}
      <section className="py-16 bg-freeze-purple">
        <div className="container-custom">
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
              <h2 className="mb-4 md:mb-0">Available Loads</h2>
              <div className="flex space-x-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search origin or destination"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:border-ice-cold focus:ring focus:ring-medium-purple focus:ring-opacity-50"
                  />
                  <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
                <button 
                  onClick={toggleFilter}
                  className="btn-secondary flex items-center"
                >
                  <Filter size={18} className="mr-2" />
                  Filter
                </button>
              </div>
            </div>

            {/* Filter Panel */}
            {isFilterOpen && (
              <div className="bg-freeze-purple p-4 rounded-md mb-6 animate-slide-up">
                <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
                  <div>
                    <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">Freight Type</label>
                    <select
                      id="type"
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                      className="input-field w-full md:w-48"
                    >
                      <option value="">All Types</option>
                      <option value="Dry Van">Dry Van</option>
                      <option value="Refrigerated">Refrigerated</option>
                      <option value="Flatbed">Flatbed</option>
                    </select>
                  </div>
                  <div className="md:self-end">
                    <button 
                      onClick={clearFilters}
                      className="text-purple-pain hover:text-medium-purple transition-colors duration-300"
                    >
                      Clear Filters
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Loads Table */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Origin - Destination
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Distance
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Rate
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Weight
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {loads.length > 0 ? (
                    loads.map((load) => (
                      <tr key={load.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-gray-900">{load.origin}</div>
                          <div className="text-gray-500">→ {load.destination}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                          {load.distance}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap font-medium text-purple-pain">
                          {load.rate}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                          {load.weight}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full 
                            ${load.type === 'Dry Van' ? 'bg-blue-100 text-blue-800' : 
                              load.type === 'Refrigerated' ? 'bg-green-100 text-green-800' : 
                              'bg-yellow-100 text-yellow-800'}`
                          }>
                            {load.type}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                          {new Date(load.date).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <button className="text-purple-pain hover:text-heavy-purple transition-colors duration-300">
                            Details
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={7} className="px-6 py-4 text-center text-gray-500">
                        No loads found matching your criteria.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <div className="flex flex-col md:flex-row items-center justify-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <PackageOpen size={60} className="mx-auto mb-4 text-purple-pain" />
                <h3 className="text-xl font-semibold mb-2">Looking for Custom Loads?</h3>
                <p className="text-gray-600 max-w-md">
                  Our dispatchers can find loads that match your specific requirements and preferences.
                </p>
              </div>
              <CTAButton 
                text="Find Loads" 
                to="/contact" 
                variant="primary"
                className="px-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Description */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6">Comprehensive Dispatch Services</h2>
              <p className="text-gray-600 mb-4">
                Our dispatchers work tirelessly to find the best loads for your trucks, negotiate rates, and handle all the paperwork, so you can focus on driving and growing your business.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <TruckIcon size={20} className="text-purple-pain mt-1 mr-2" />
                  <span>Load matching based on your equipment and preferences</span>
                </li>
                <li className="flex items-start">
                  <TruckIcon size={20} className="text-purple-pain mt-1 mr-2" />
                  <span>Rate negotiation to maximize your profits</span>
                </li>
                <li className="flex items-start">
                  <TruckIcon size={20} className="text-purple-pain mt-1 mr-2" />
                  <span>Paperwork management and document processing</span>
                </li>
                <li className="flex items-start">
                  <TruckIcon size={20} className="text-purple-pain mt-1 mr-2" />
                  <span>24/7 support for any issues that arise on the road</span>
                </li>
                <li className="flex items-start">
                  <TruckIcon size={20} className="text-purple-pain mt-1 mr-2" />
                  <span>Route planning and optimization</span>
                </li>
              </ul>
            </div>
            <div>
              <div 
                className="h-80 rounded-lg shadow-xl bg-cover bg-center"
                style={{
                  backgroundImage: 'url("https://images.pexels.com/photos/3646105/pexels-photo-3646105.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")'
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DispatchPage;