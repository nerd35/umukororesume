import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

class Navbar extends Component {
	render() {
		return (
			<div>
				<nav className=' purple lighten-1'>
					<div className='container'>
						<div className='nav-wrapper'>
							<Link to='/' className='brand-logo'>
								Nerd35
							</Link>
							<Link to='/' data-target="slide-out" className="sidenav-trigger">
								<i className='material-icons'>menu</i>
							</Link>
							<ul className='right hide-on-med-and-down'>
								<li>
									<Link to='/'>
										<i className='fas fa-home'></i> Home
									</Link>
								</li>
								<li>
									<Link to='/about'>
										<i className='fas fa-user'></i> About
									</Link>
								</li>
								<li>
									<Link to='/skills'>
										<i className='fas fa-copy'></i> Skills
									</Link>
								</li>
								<li>
									<Link to='/experience'>
										<i className='fas fa-id-badge'></i> Experience
									</Link>
								</li>
								<li>
									<Link to='/education'>
										<i class='fas fa-graduation-cap'></i> Education
									</Link>
								</li>
								<li>
									<Link to='/portfolio'>
										<i class='fas fa-suitcase-rolling'></i> Portfolio
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</nav>
				<ul id="slide-out" className="sidenav">
					<li>
						<Link to='/'>
							<i className='fas fa-home'></i> Home
						</Link>
					</li>
					<li>
						<Link to='/about'>
							<i className='fas fa-user'></i> About
						</Link>
					</li>
					<li>
						<Link to='/skills'>
							<i className='fas fa-copy'></i> Skills
						</Link>
					</li>
					<li>
						<Link to='/experience'>
							<i className='fas fa-id-badge'></i> Experience
						</Link>
					</li>
					<li>
						<Link to='/education'>
							<i class='fas fa-graduation-cap'></i> Education
						</Link>
					</li>
					<li>
						<Link to='/portfolio'>
							<i class='fas fa-suitcase-rolling'></i> Portfolio
						</Link>
					</li>
				</ul>
			</div>
		);
	}
}

export default Navbar;
