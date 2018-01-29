import React, { Component } from 'react';
import Header from './Header';
import Dashboard from './Dashboard';
import TodoList from './TodoList';
import { connect } from 'react-redux';
import * as actions from '../actions';



class App extends Component {
    componentDidMount() {
        this.props.fetchTodo();
    }

    render() {
        return (
            <div>
                <Header />
                <br />
                <div className="container">
                    <Dashboard />
                    <TodoList />
                </div>
            </div>
        );
    }
};

export default connect(null, actions)(App);