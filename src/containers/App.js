import React from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import './App.css';
import ErrorBoundary from '../components/ErrorBoundary'

class App extends React.Component {
	constructor () {
		super();
		this.state = {
		    robots: [],
		    searchField: ''
		}
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(users => this.setState({ robots: users }));
	}

	//need to use this function syntax to that "this" object will work
	onSearchChange = (event) => {
		this.setState({ searchField: event.target.value })
	}

	render() {
		const {robots, searchField} = this.state;
		const filteredRobots = robots.filter(newRobot => {
			return newRobot.name.toLowerCase().includes(searchField.toLowerCase());
		})
		return (
			<div className='tc'>
			<h1 className='f1'>ROBOFRIENDS</h1>
			<SearchBox searchChange={this.onSearchChange}/>
			<Scroll>
				<ErrorBoundary>
					<CardList robots={filteredRobots}/>
				</ErrorBoundary>
			</Scroll>
			</div>
		)
	}
}

export default App;