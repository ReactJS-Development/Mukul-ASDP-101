import React, { Component } from 'react';
import './App.css';

class Test extends Component {

	constructor(props) {
		super(props);
		console.log('This is constructor');
		this.state= {clicker: 100};
	}

	componentWillMount() {
	console.log('This is componentWillMount');
	}

	componentDidMount() {
		console.log('This is componentDidMount');
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.clicker!==this.state.clicker) {
      	console.log('This is componentWillReceiveProps');
    }
		}

	shouldComponentUpdate() {
	console.log('This is shouldComponentUpdate');
	return true;
	}

	componentWillUpdate(nextProps, nextState) {
	console.log('This is componentWillUpdate');
	}

	componentDidUpdate(prevProps, prevState) {
	console.log('This is componentDidUpdate');
	}

	componentWillUnmount() {
	console.log('This is componentWillMount');
	}

	Decreament = () => {
		this.setState({clicker: this.state.clicker-1,});
	}

  render() {
    return (
      <div>
      <h3> {this.state.clicker}</h3>
      <button onClick={this.Decreament}>Click Me</button>
      </div>
    );
  }
}

export default Test;
