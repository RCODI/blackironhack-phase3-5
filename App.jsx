import React, {Component} from 'react';
import {Navbar} from 'react-bootstrap';
import Counter from './Counter';
import Map from './Map';
import NewMap from './NewMap';
import LabelsExample from './labelsexample';

export default class App extends Component {
	render() {
		return (
			<div id="content">
				<Navbar fixedTop>
					<Navbar.Header>
						<Navbar.Brand>
							Vektorv
						</Navbar.Brand>
					</Navbar.Header>
				</Navbar>
				<div className="container">
					<Counter />
					{/* <Map /> */}
					{/* <LabelsExample /> */}
					<NewMap />
				</div>
			</div>
		);
	}
}
