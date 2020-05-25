import React from 'react';
import 'materialize-css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Portfolio from './components/Portfolio';import Navbar from './components/Navbar';

const App = () => {
	return (
		<div>
			<Router>
        <Navbar/>
        <Switch>
        <Route exact path='/' component={Home} />
					<Route path='/about' component={About} />
					<Route path='/experience' component={Experience} />
					<Route path='/skills' component={Skills} />
					<Route path='/education' component={Education} />
					<Route path='/portfolio' component={Portfolio} />
				</Switch>
			</Router>
		</div>
	);
};

export default App;
