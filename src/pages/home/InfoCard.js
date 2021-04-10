import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './infoCard.css';

const InfoCard = ({ info }) => {
  return (
    <div className="col-md-4">
      <div className={`d-flex p-4 justify-content-around align-items-center info-${info.background}`}>
        <div style={{fontSize: '30px', color: '#fff'}} >
          <FontAwesomeIcon icon={info.icon} />
        </div>
        <div style={{color: '#fff', marginLeft: '10px'}}>
          <h3>{info.title}</h3>
          <p>{info.description}</p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
