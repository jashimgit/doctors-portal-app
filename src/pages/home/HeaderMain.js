import React from 'react';
import chair from '../../assets/images/chair.png';

const HeaderMain = () => {
    return (
        <main className="container">
            <div className="row align-items-center" style={{height: '600px'}}>
            <div className="col-md-4 offset-md-1 header-main-left" >
                <h1>Your new smile starts here</h1>
                <p className="text-secondary"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus officiis cum earum expedita pariatur eum.</p>
                <button className="btn btn-info">GET APPOINTMENT</button>
            </div>
            <div className="col-md-6">
                <img src={chair} className="img-fluid" alt="" />
            </div>
        </div>
        </main>
    );
};

export default HeaderMain;