import React, { Component } from 'react';

class Portfolio extends Component {
	render() {
		
		return (
			<div>
				<div className='card'>
					<div className='card-content '>
						<h6>
							<strong>PORTFOLIO</strong>
						</h6>

						<div className='row'>
							<div className='col s12 m6 l6 xl6'>
								<div class='card'>
									<div class='card-image'>
										<img src={require('../assets/angela-azeh.png')} alt='angela-ezeh' />
									</div>
									<div class='card-content'>
										<p>
											<a
												className='grey-text darken-2'
												href='https://anezeh.netlify.app/'
												target='_blank'
												rel='noopener noreferrer'
											>
												<strong>Angela Ezeh</strong>
											</a>
										</p>
									</div>
								</div>
								</div>
								<div className='col s12 m6 l6 xl6'>
									<div class='card'>
										<div class='card-image'>
											<img src={require('../assets/cardinal.png')} alt='cardinal' />
										</div>
										<div class='card-content'>
											<p>
												<a
													className='grey-text darken-2'
													href='https://cadnagsl.netlify.app/'
													target='_blank'
													rel='noopener noreferrer'
												>
													<strong>CADNA GSL</strong>
												</a>
											</p>
										</div>
									</div>
							</div>
						</div>
						<div className='row'>
							<div className='col s12 m6 l6 xl6'>
								<div class='card'>
									<div class='card-image'>
										<img src={require('../assets/learn2code.png')} alt='angela-ezeh' />
									</div>
									<div class='card-content'>
										<p>
											<a
												className='grey-text darken-2'
												href='https://learn2codes.netlify.app/'
												target='_blank'
												rel='noopener noreferrer'
											>
												<strong>Code city</strong>
											</a>
										</p>
									</div>
								</div>
								</div>
								<div className='col s12 m6 l6 xl6'>
									<div class='card'>
										<div class='card-image'>
											<img src={require('../assets/officesetup.png')} alt='cardinal' />
										</div>
										<div class='card-content'>
											<p>
												<a
													className='grey-text darken-2'
													href='https://officesetup.netlify.app/'
													target='_blank'
													rel='noopener noreferrer'
												>
													<strong>Officesetup</strong>
												</a>
											</p>
										</div>
									</div>
							</div>
						</div>
						<div className='row'>
							<div className='col s12 m6 l6 xl6'>
								<div class='card'>
									<div class='card-image'>
										<img src={require('../assets/cityserve.png')} alt='angela-ezeh' />
									</div>
									<div class='card-content'>
										<p>
											<a
												className='grey-text darken-2'
												href='https://cityserve.com.ng'
												target='_blank'
												rel='noopener noreferrer'
											>
												<strong>City serve</strong>
											</a>
										</p>
									</div>
								</div>
								</div>
								<div className='col s12 m6 l6 xl6'>
									<div class='card'>
										<div class='card-image'>
											<img src={require('../assets/shew.png')} alt='cardinal' />
										</div>
										<div class='card-content'>
											<p>
												<a
													className='grey-text darken-2'
													href='https://shewfoundation.org'
													target='_blank'
													rel='noopener noreferrer'
												>
													<strong>Shew Foundation</strong>
												</a>
											</p>
										</div>
									</div>
							</div>
						</div>
						<div className='row'>
							<div className='col s12 m6 l6 xl6'>
								<div class='card'>
									<div class='card-image'>
										<img src={require('../assets/covid-19-tracker.png')} alt='angela-ezeh' />
									</div>
									<div class='card-content'>
										<p>
											<a
												className='grey-text darken-2'
												href='https://covid19trackersapp.netlify.app/'
												target='_blank'
												rel='noopener noreferrer'
											>
												<strong>Covid-19 Tracker</strong>
											</a>
										</p>
									</div>
								</div>
								</div>
								<div className='col s12 m6 l6 xl6'>
									<div class='card'>
										<div class='card-image'>
											<img src={require('../assets/perry.png')} alt='cardinal' />
										</div>
										<div class='card-content'>
											<p>
												<a
													className='grey-text darken-2'
													href='https://perryinc.netlify.app/'
													target='_blank'
													rel='noopener noreferrer'
												>
													<strong>Perry INC</strong>
												</a>
											</p>
										</div>
									</div>
							</div>
						</div>
						<div className='row'>
							<div className='col s12 m6 l6 xl6'>
								<div class='card'>
									<div class='card-image'>
										<img src={require('../assets/crypto.png')} alt='angela-ezeh' />
									</div>
									<div class='card-content'>
										<p>
											<a
												className='grey-text darken-2'
												href='https://cryptominning.netlify.app/'
												target='_blank'
												rel='noopener noreferrer'
											>
												<strong>Crypto Minning</strong>
											</a>
										</p>
									</div>
								</div>
								</div>
								<div className='col s12 m6 l6 xl6'>
									<div class='card'>
										<div class='card-image'>
											<img src={require('../assets/firebaseauth.png')} alt='cardinal' />
										</div>
										<div class='card-content'>
											<p>
												<a
													className='grey-text darken-2'
													href='https://firebasesocials.netlify.app/'
													target='_blank'
													rel='noopener noreferrer'
												>
													<strong>Firebase Authentication</strong>
												</a>
											</p>
										</div>
									</div>
							</div>
						</div>
						<div className='row'>
							<div className='col s12 m6 l6 xl6'>
								<div class='card'>
									<div class='card-image'>
										<img src={require('../assets/event-app.png')} alt='angela-ezeh' />
									</div>
									<div class='card-content'>
										<p>
											<a
												className='grey-text darken-2'
												href='https://myeventsapp-view.herokuapp.com/'
												target='_blank'
												rel='noopener noreferrer'
											>
												<strong>Event App</strong>
											</a>
										</p>
									</div>
								</div>
								</div>
								
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Portfolio;
