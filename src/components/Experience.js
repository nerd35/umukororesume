import React, { Component } from 'react';
 
class Experience extends Component {
  render() { 
    return (
      <div>
      <div className='card'>
        <div className='card-content'>
          <h6>
            <strong>EXPERIENCE</strong>
          </h6> 
          <div className="row">
            <div className="col s12 m4 l4 xl4">
              <p className="purple year_exp white-text"> Aug 
              <strong> 2019</strong> - <strong> Till date</strong>
              </p>
            </div>
            <div className="col s12 m8 l8 xl8">
            <blockquote className="no-pad">
              <h6 class="no-pad mt-bottom"><strong>FRONT-END DEVELOPER</strong></h6>
              <p>Design, develop and test HTML, CSS, Bootstrap and React.JS that meets
              accessibility and web browser standards for website.
              Used React-Router to turn application into Standard websites
              Component for UX-Library consisted of Button, Checkbox, Input, Icons,
              Toggle Button, Dropdown and many more.
              </p>
            </blockquote>
            </div>
            <div className="col s12 m4 l4 xl4">
              <p className="purple year_exp white-text"> may 
              <strong> 2018</strong> - <strong> Till date</strong>
              </p>
            </div>
            <div className="col s12 m8 l8 xl8">
            <blockquote className="no-pad">
              <h6 class="no-pad mt-bottom"><strong>FREELANCE SOFTWARE ENGINEER</strong></h6>
              <p>Communicated with clients to deliver quality software projects and followed
              up with them to ensure that the customer was happy with the work.
              Developed custom front-end HTML, CSS, Javascript & Wordpress websites.
              Configured domain names and hosting through GoDaddy.com and others.
              Implemented Typeform integration and other 3rd party integrations.
              </p>
            </blockquote>
            </div>
          </div>
          </div>
          </div>

      </div>
    );
  }
}
 
export default Experience;