import React from 'react';
import { Link } from 'react-router-dom';

import OMNICHANEL from '@/assets/images/photos/OMNICHANEL.png';
import LOGISTICALSOLUTIONS from '@/assets/images/photos/LOGISTICALSOLUTIONS.png';
import ECOM from '@/assets/images/photos/ECOM.png';
import BRANDMANAGEMENT from '@/assets/images/photos/BRANDMANAGEMENT.png';

const PricingCards = () => {
    return (
        <div className="py-16">
            <div className="grid grid-cols-4">
                {/* Column 1: Omni Channel Distribution & Trading */}
                <div 
                    className="relative text-center bg-cover bg-center text-white py-8 px-4 h-[800px] uppercase"
                    style={{ backgroundImage: `url(${OMNICHANEL})`, backgroundSize: 'cover', backgroundPosition: 'left center' }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    {/* <img src="/icons/omni-channel.png" alt="Omni Channel" className="mx-auto mb-4 w-16 relative z-10" /> */}
                    <h3 className="text-xl font-semibold relative z-10 uppercase">Omni Channel Distribution & Trading</h3>
                    <p>Enabling you to reached your customers in a variety of B2B and B2C market across the GCC</p>
                </div>

                {/* Column 2: End-to-End Logistical Solutions */}
                <div 
                    className="relative text-center bg-cover bg-center text-white py-8 px-4 h-[800px]"
                    style={{ backgroundImage: `url(${LOGISTICALSOLUTIONS})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    {/* <img src="/icons/logistics.png" alt="Logistical Solutions" className="mx-auto mb-4 w-16 relative z-10" /> */}
                    <h3 className="text-xl font-semibold relative z-10 uppercase">3PL Logistics</h3>
                    <p>Accomplish more with our extensive shipping warehouse, inventory management and order fulfillment solutions</p>
                </div>

                {/* Column 3: E-Commerce & Sales Management */}
                <div 
                    className="relative text-center bg-cover bg-center text-white py-8 px-4 h-[800px]"
                    style={{ backgroundImage: `url(${ECOM})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    {/* <img src="/icons/ecom-sales.png" alt="E-Commerce Management" className="mx-auto mb-4 w-16 relative z-10" /> */}
                    <h3 className="text-xl font-semibold relative z-10 uppercase">E com & sale management services</h3>
                    <p>Increase your revenues by selling directly to your customers in the GCC through custom-built ecommerce portal</p>
                </div>

                {/* Column 4: Brand Management Services */}
                <div 
                    className="relative text-center bg-cover bg-center text-white py-8 px-4 h-[800px]"
                    style={{ backgroundImage: `url(${BRANDMANAGEMENT})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                >
                    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                    {/* <img src="/icons/brand-management.png" alt="Brand Management" className="mx-auto mb-4 w-16 relative z-10" /> */}
                    <h3 className="text-xl font-semibold relative z-10 uppercase">Brand Management Services</h3>
                    <p>Build and grow your brand with tailored strategies that resonate in the GCC market </p>
                </div>
            </div>
        </div>
    );
};

export default PricingCards;