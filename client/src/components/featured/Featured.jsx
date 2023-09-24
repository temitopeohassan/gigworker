import React, { useState } from "react";
import Hero from "../../assets/img/home4-hero-element-1.png";
import { useNavigate } from "react-router-dom";
import  '../../assets/css/responsive.css';
import  '../../assets/css/style.css';


function Featured() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate(`/gigs?search=${input}`);
  };
  return (
  
  <>
   <section className="hero-home4 pb-0 pt80">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6">
            <div className="pr30 pr0-lg mb30-md position-relative">
              <h1 className="animate-up-1 mb25 text-thm2">Hire the best freelancers for <br className="d-none d-xl-block" />any job, online.</h1>
              <p className="text animate-up-2">Millions of people use freeio.com to turn their ideas into reality.</p>
              <div className="d-flex align-items-center mt30 animate-up-3">
                <a href="page-job-list-v1.html" className="ud-btn btn-thm me-3">Find Work</a>
                <a href="page-freelancer-v1.html" className="ud-btn btn-thm-border">Find Talent</a>
              </div>
            </div>
          </div>
          <div className="col-lg-6 d-none d-lg-block">
            <div className="home5-hero-content position-relative">
              <img src={Hero} alt="" className="animate-up-1 bounce-x w-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  );
}

export default Featured;
