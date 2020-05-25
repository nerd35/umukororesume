import React, { Component } from 'react';

class Skills extends Component {
	render() {
		return (
			<div>
				<div className='card'>
					<div className='card-content'>
						<h6>
							<strong>PROFESSIONAL SKILLS</strong>
						</h6>
						<div className='row mt-top'>
							<div className='col s6 m6 l6 xl6'>
								<p>HTML</p>
								<div className='progress grey lighten-1'>
									<div className='determinate blue' style={{ width: '90%' }}></div>
								</div>
								<p>BOOTSTRAP</p>
								<div className='progress grey lighten-1'>
									<div className='determinate yellow' style={{ width: '90%' }}></div>
								</div>
								<p>ANT-DESIGN</p>
								<div className='progress grey lighten-1'>
									<div className='determinate green' style={{ width: '75%' }}></div>
								</div>
								<p>CSS/SASS/LESS</p>
								<div className='progress grey lighten-1'>
									<div className='determinate purple' style={{ width: '90%' }}></div>
								</div>
							</div>
							<div className='col s6 m6 l6 xl6'>
								<p>REACT JS</p>
								<div className='progress grey lighten-1'>
									<div className='determinate pink' style={{ width: '90%' }}></div>
								</div>
								<p>NODE JS</p>
								<div className='progress grey lighten-1'>
									<div className='determinate lemon' style={{ width: '75%' }}></div>
								</div>
								<p>JAVASCRIPT</p>
								<div className='progress grey lighten-1'>
									<div className='determinate orange' style={{ width: '75%' }}></div>
								</div>
								<p>MONGO DB</p>
								<div className='progress grey lighten-1'>
									<div className='determinate brown' style={{ width: '70%' }}></div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Skills;
