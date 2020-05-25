import React, { Component } from 'react';
 
class Profile extends Component {
  render() { 
    return (
      <div>
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator" src={require('../assets/profile_img.jpg')} alt="profile_image"/>
          </div>
          <div className="card-content ">
              <span className="card-title activator purple-text text-darken-4" style={{fontSize: '15px', fontWeight: '900'}}>Umukoro Chinedu<i className="material-icons right icon-white">more_vert</i></span>
              <p style={{fontSize: '13px', fontWeight: '600', color: 'red'}}>Frontend Developer</p>

              <a href="https://github.com/Nerd35" target='_blank'
              rel='noopener noreferrer'><i className="fab fa-github grey-text text-darken-4"   style={{marginRight: '10px'}}></i></a>
              <a href="https://www.linkedin.com/in/umukoro-chinedu-05a60434/" target='_blank'
              rel='noopener noreferrer'><i className="fab fa-linkedin-in grey-text text-darken-4"  style={{marginRight: '10px'}}></i></a>
              <a href="https://www.instagram.com/mukkyball/" target='_blank'
              rel='noopener noreferrer'><i className="fab fa-instagram grey-text text-darken-4"  style={{marginRight: '10px'}}></i></a>
              <a href="https://twitter.com/mukolochinedu" target='_blank'
              rel='noopener noreferrer'><i className="fab fa-twitter grey-text text-darken-4"  style={{marginRight: '10px'}}></i></a>
              <a href="https://www.facebook.com/patrick.mukolo.1" target='_blank'
              rel='noopener noreferrer'><i className="fab fa-facebook-f grey-text text-darken-4"  style={{marginRight: '15px'}}></i></a>
            </div>
            <div className="card-reveal">
              <span className="card-title grey-text text-darken-4">Social links<i className="material-icons right" target='_blank'
              rel='noopener noreferrer'>close</i></span>
              <a href="https://github.com/Nerd35" target='_blank'
              rel='noopener noreferrer'><i className="fab fa-github grey-text text-darken-4"   style={{marginRight: '15px'}}></i></a>
              <a href="https://www.linkedin.com/in/umukoro-chinedu-05a60434/" target='_blank'
              rel='noopener noreferrer'><i className="fab fa-linkedin-in grey-text text-darken-4"  style={{marginRight: '15px'}}></i></a>
              <a href="https://www.instagram.com/mukkyball/" target='_blank'
              rel='noopener noreferrer'><i className="fab fa-instagram grey-text text-darken-4"  style={{marginRight: '15px'}}></i></a>
              <a href="https://twitter.com/mukolochinedu" target='_blank'
              rel='noopener noreferrer'><i className="fab fa-twitter grey-text text-darken-4"  style={{marginRight: '15px'}}></i></a>
              <a href="https://www.facebook.com/patrick.mukolo.1" target='_blank'
              rel='noopener noreferrer'><i className="fab fa-facebook-f grey-text text-darken-4"  style={{marginRight: '15px'}}></i></a>
             
            </div>
          </div>
      </div>
    );
  }
}
 
export default Profile;