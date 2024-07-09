import React from 'react';

const Hero=()=>{
    return (
        <div className="container-xxl position-relative p-0">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
            <a href="" className="navbar-brand p-0">
                <h1 className="text-primary m-0"><i className="fa fa-utensils me-3"></i>DudeBooking</h1>
               
            </a>
            
        </nav>

        <div className="container-xxl py-5 bg-dark hero-header mb-5">
            <div className="container my-5 py-5">
                <div className="row align-items-center g-5">
                    <div className="col-lg-6 text-center text-lg-start">
                        <h1 className="display-3 text-white animated slideInLeft">Enjoy Our<br/>Delicious Meal</h1>
                        <p className="text-white animated slideInLeft mb-4 pb-2">Welcome!</p>
                        <a href="" className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">Book A Table</a>
                    </div>
                    <div className="col-lg-6 text-center text-lg-end overflow-hidden">
                        <img className="img-fluid" src="assets/img/hero.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Hero;