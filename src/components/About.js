import React, { Component } from 'react';
 
class About extends Component {
  render() { 
    return (
      <div>
        <div className="card">
          <div className="card-content">
            <h6 className='mt-bottom'>ABOUT ME </h6>
            <p className="grey-text">I am a Frontend Developer who is self-motivated and hard working
            with over 1 years of experience in software development, I’m a team player
            with excellent social and creative abilities. I have a passion for excellence with
            the aim of improving on personal and professional levels and attaining
            organisation and personal goals.</p>
          </div> 
          <div className="card-action">
            <h6>
            <strong>PERSONAL INFO</strong>
            </h6>
            <div className='row mt'>
              <div className='col s12 m6 xl6 l6'>
                <p><strong>Language:</strong> English, Ukwuani</p>
                <p><strong>Email:</strong> mukolochinedu@gmail.com</p>
                <p><strong>Phone No:</strong> +23408124696524</p>
              </div>
              <div className='col s12 m6 xl6 l6'>
              <p><strong>Nationality:</strong> Nigeria</p>
              <p><strong>State of Origin:</strong> Delta </p>
              <p><strong>Religion:</strong> Christianity</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default About;