import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import InfoCard from './InfoCard';
const infos = [
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit Our location',
        description: 'Brooklyn, NY 10036, United States',
        icon: faMapMarker,
        background: 'dark'
    },
    {
        title: 'Contact us now',
        description: '+000 123 456789',
        icon: faPhone,
        background: 'primary'
    }
]
const BusinessInfo = () => {
    return (
        <section className="container">
            <div className="row">
            {
                infos.map(info => <InfoCard  info={info} />)
            }
            </div>
        </section>
    );
};

export default BusinessInfo;