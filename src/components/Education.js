import React, { Component } from 'react';
 
class Education extends Component {
  render() { 
    return (
      <div>
        <div className='card'>
          <div className='card-content '>
            <h6><strong>EDUCATIONS</strong></h6>
            <table className="striped">
              <thead>
                <tr>
                  <th>Certificate</th>
                  <th>Date</th>
                  <th>School</th>
                </tr>
              </thead>
              <tbody>
                <tr> <td>Bsc Business Administration</td>
                <td>2008</td>
                <td>Babcock university</td>
                </tr>
                <tr> <td>Bsc Business Administration</td>
                <td>2008</td>
                <td>Babcock university</td>
                </tr>
                <tr> <td>Bsc Business Administration</td>
                <td>2008</td>
                <td>Babcock university</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Education;