import React from 'react';
import dental from '../../assets/images/dental.png';
import cavity from '../../assets/images/cavity.png';
import tooth from '../../assets/images/tooth.png';
import ServiceDetails from './ServiceDetails';
import './services.css';

const serviceDetails = [
    {
        img: dental,
        title: 'Fluoride Treatment'
    },
    {
        img: cavity,
        title: 'Cavity Filling'
    },
    {
        img: tooth,
        title: 'Teath Whitening'
    }
]
const Services = () => {
    return (
        <section className="services container my-5">
            <div className="service-header pb-5">
                <h4>OUR SERVICES</h4>
                <h1>Services We Provide</h1>
            </div>
            <div className="row">
                {
                    serviceDetails.map(service => <ServiceDetails service={service}/>)
                }
            </div>
        </section>
    );
};

export default Services;