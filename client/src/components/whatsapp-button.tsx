import React, { useState } from 'react';

const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleOptions = () => {
    setIsOpen(!isOpen);
  };
  
  const openWhatsApp = (phoneNumber: string) => {
    window.open(`https://wa.me/${phoneNumber.replace(/[^0-9]/g, '')}`, '_blank');
  };
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Options popup */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-xl p-4 mb-4 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <h3 className="font-bold text-gray-800 mb-3">Contact Us via WhatsApp</h3>
          <div className="space-y-3">
            <button 
              onClick={() => openWhatsApp('+201060449214')}
              className="w-full flex items-center justify-between bg-green-50 hover:bg-green-100 text-green-800 px-4 py-3 rounded-lg transition-colors"
            >
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
                  <i className="fas fa-building text-white text-sm"></i>
                </div>
                <span>Egypt Head Office</span>
              </div>
              <i className="fab fa-whatsapp text-green-600 text-xl"></i>
            </button>
            
            <button 
              onClick={() => openWhatsApp('+971503693357')}
              className="w-full flex items-center justify-between bg-green-50 hover:bg-green-100 text-green-800 px-4 py-3 rounded-lg transition-colors"
            >
              <div className="flex items-center">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center mr-3">
                  <i className="fas fa-building text-white text-sm"></i>
                </div>
                <span>UAE Branch Office</span>
              </div>
              <i className="fab fa-whatsapp text-green-600 text-xl"></i>
            </button>
            
            <button 
              onClick={toggleOptions}
              className="w-full text-gray-500 text-sm text-center mt-2"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      
      {/* Main WhatsApp button */}
      <button 
        onClick={toggleOptions}
        className="w-16 h-16 bg-green-500 rounded-full shadow-lg flex items-center justify-center text-white hover:bg-green-600 transition-colors focus:outline-none focus:ring-4 focus:ring-green-300 pulse-animation"
        aria-label="Contact us on WhatsApp"
      >
        <i className="fab fa-whatsapp text-3xl"></i>
      </button>
    </div>
  );
};

export default WhatsAppButton;