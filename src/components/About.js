import React, { Component } from 'react';
 
class About extends Component {
  render() { 
    return (
      <div>
        <div className="card">
          <div className="card-content">
            <h6 className='mt-bottom'>ABOUT ME </h6>
            <p className="grey-text">Experienced Front-end Developer and Data Analyst with a demonstrated history of working in a software, staffing and recruiting industry. Skilled in UI design, Mern stack, training,  Sales, Sales Management, Management, Closed-Circuit Television (CCTV), and Direct Sales. Strong information technology professional with a Bachelor's degree focused in business administration from babcock university. </p>
          </div> 
          <div className="card-action">
            <h6>
            <strong>PERSONAL INFO</strong>
            </h6>
            <div className='row mt'>
              <div className='col s12 m6 xl6 l6'>
                <p><strong>Email:</strong> mukolochinedu@gmail.com</p>
              </div>
              <div className='col s12 m6 xl6 l6'>
              <p><strong>Phone No:</strong> +23408124696524</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default About;