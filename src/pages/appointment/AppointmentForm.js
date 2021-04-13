import React from "react";
import { useForm } from "react-hook-form";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const AppointmentForm = ({ modalIsOpen, closeModal, title, appointMentOn }) => {
  
  const { register, handleSubmit, formState: { errors } } = useForm();
  
  const onSubmit = data => {
    // console.log(data)
    data.service = title;
    data.appointmentDate = appointMentOn;
    data.created_at =new Date();

    fetch('http://localhost:5000/addAppointment', {
      method: 'POST',
      headers: {'Content-Type' : 'application/json'},
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(success => {
      if(success){
        closeModal();
        alert('Appointment booked successfully');
      }
    })

    
  };
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>{title}</h2>
        <p className="text-center lead">apppointment on {appointMentOn.toDateString()} </p>
        
        <button onClick={closeModal} type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>

        <form  onSubmit={handleSubmit(onSubmit)}>

          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Your Name"
            
              {...register("name",  { required: true })}
            />
            {errors.name && <span className="text-danger">This field is required</span>}
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Phone Number"
             
              {...register("phone",  { required: true })}
            />
              {errors.phone && <span className="text-danger">This field is required</span>}
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Email"
             
              {...register("email",  { required: true })}
            />
              {errors.email && <span className="text-danger">This field is required</span>}
          </div>
          <div className="form-row">
          <div className="form-group col-md-4">  
              <select   className="form-control"   {...register("gender",  { required: true })}  >
                <option disabled={true} value="Not set">Select Gender...</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="not set">Other</option>
              </select>
              {errors.gender && <span className="text-danger">This field is required</span>}
            </div>
        
            <div className="form-group col-md-4">
              <input 
                type="number" 
                className="form-control" 
                  
                {...register("age",  { required: true })}
                placeholder="Your Age" />
                  {errors.age && <span className="text-danger">This field is required</span>}
            </div>
            <div className="form-group col-md-4">
              <input 
              type="number" 
              {...register("weight",  { required: true })}
              className="form-control" 
              placeholder="Weight" />
                {errors.weight && <span className="text-danger">This field is required</span>}
            </div>
          </div>
          
          <button type="submit" className="btn btn-primary">
          Send
          </button>
        </form>
      </Modal>
    </div>
  );
};

export default AppointmentForm;
