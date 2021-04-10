import React from 'react';

const ServiceDetails = ({service}) => {
    return (
        <div className="col-md-4 text-center">
            <img src={service.img} alt="service"/>
            <div className="service-inner-item py-5">
                <h2 className="mb-4">{service.title}</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta incidunt ratione itaque, iste molestias numquam!</p>
            </div>
        </div>
    );
};

export default ServiceDetails;