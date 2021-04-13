import React from 'react';
import { useLocation } from 'react-router-dom';

const Erorr404 = () => {
    let location = useLocation();
    return (
        <div className="alert alert-danger">
            <h3>Sorry page not found {location }</h3>
        </div>
    );
};

export default Erorr404;