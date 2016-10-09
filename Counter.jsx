import React, {Component, PropTypes as PT} from 'react';
import {connect} from 'react-redux';
import {Jumbotron, ButtonGroup, Button} from 'react-bootstrap';

class BaseCounter extends Component {
	static propTypes = {
		count: PT.number.isRequired,
		onPlusClick: PT.func.isRequired,
		onMinusClick: PT.func.isRequired
	}

    render() {
		return (
			<Jumbotron>
				<h1>Hello world!</h1>
				<p>You counted to {this.props.count}</p>
				<ButtonGroup>
					<Button bsStyle="success" onClick={this.props.onMinusClick}>-</Button>
					<Button bsStyle="danger" onClick={this.props.onPlusClick}>+</Button>
				</ButtonGroup>
			</Jumbotron>
		);
	}
}

const mapStateToProps = state => {
  return { count: state };
};

const mapDispatchToProps = dispatch => {
  return {
    onPlusClick: () => dispatch({ type: 'INCREMENT' }),
    onMinusClick: () => dispatch({ type: 'DECREMENT' })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BaseCounter)
