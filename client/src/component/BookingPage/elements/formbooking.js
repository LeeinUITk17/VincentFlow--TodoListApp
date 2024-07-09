import React, { useState } from "react";
import VideoSide from "./videoside";
import { PreLoader } from "../../child.component";
import Swal from "sweetalert2";
const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        datetime: '',
        people: '1',
        otherValue: '',
        message: ''
    });
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const payload = {
            Name: formData.name,
            Email: formData.email,
            Time: formData.datetime,
            People: formData.people === 'other' ? formData.otherValue : formData.people,
            Note: formData.message
        };

        try {
            const response = await fetch('http://localhost:8000/api/booking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your booking was successful. Please check your mail.",
                    showConfirmButton: false,
                    timer: 1500
                });
            } else {
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "There was an error submitting your booking.",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (error) {
            console.error('Error submitting booking:', error);
            alert('Error submitting booking');
        }finally {
            setIsLoading(false); 
        }
    };

    return (
        <div>
            {isLoading ? <PreLoader /> : (
                  <div className="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="row g-0">
                      <div className="col-md-6">
                          <div className="video">
                              <button type="button" className="btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/OycJdFqdy_M" data-bs-target="#videoModal" aria-label="Play Video">
                                  <span></span>
                              </button>
                          </div>
                      </div>
                      <div className="col-md-6 bg-dark d-flex align-items-center">
                          <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
                              <h5 className="section-title ff-secondary text-start text-primary fw-normal">Reservation</h5>
                              <h1 className="text-white mb-4">Book A Table Online</h1>
                              <form onSubmit={handleSubmit}>
                                  <div className="row g-3">
                                      <div className="col-md-6">
                                          <div className="form-floating">
                                              <input type="text" className="form-control" id="name" placeholder="Your Name" name="name" value={formData.name} onChange={handleChange} required />
                                              <label htmlFor="name">Your Name</label>
                                          </div>
                                      </div>
                                      <div className="col-md-6">
                                          <div className="form-floating">
                                              <input type="email" className="form-control" id="email" placeholder="Your Email" name="email" value={formData.email} onChange={handleChange} required />
                                              <label htmlFor="email">Your Email</label>
                                          </div>
                                      </div>
                                      <div className="col-md-6">
                                          <div className="form-floating date" id="date3" data-target-input="nearest">
                                              <input type="date" className="form-control datetimepicker-input" id="datetime" placeholder="Date & Time" name="datetime" value={formData.datetime} onChange={handleChange} required />
                                              <label htmlFor="datetime">Date & Time</label>
                                          </div>
                                      </div>
                                      <div className="col-md-6">
                                          <div className="form-floating">
                                              <select className="form-select" id="select1" name="people" value={formData.people} onChange={handleChange} required>
                                                  <option value="1">People 1</option>
                                                  <option value="2">People 2</option>
                                                  <option value="3">People 3</option>
                                                  <option value="4">People 4</option>
                                                  <option value="5">People 5</option>
                                                  <option value="other">Other</option>
                                              </select>
                                              {formData.people === 'other' && (
                                                  <input type="number" className="form-control mt-2" id="otherValue" name="otherValue" placeholder="Enter number" min="1" value={formData.otherValue} onChange={handleChange} required />
                                              )}
                                              <label htmlFor="select1">No Of People</label>
                                          </div>
                                      </div>
                                      <div className="col-12">
                                          <div className="form-floating">
                                              <textarea className="form-control" placeholder="Special Request" id="message" name="message" style={{ height: '100px' }} value={formData.message} onChange={handleChange}></textarea>
                                              <label htmlFor="message">Special Request</label>
                                          </div>
                                      </div>
                                      <div className="col-12">
                                          <button className="btn btn-primary w-100 py-3" type="submit">Book Now</button>
                                      </div>
                                  </div>
                              </form>
                          </div>
                      </div>
                  </div>
                  <VideoSide />
              </div>
            )}
        </div>
      
    );
};

export default Form;
