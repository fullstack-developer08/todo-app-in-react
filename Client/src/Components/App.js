import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import { Dashboard } from './Dashboard';
import TodoList from './TodoList';
import { connect } from 'react-redux';
import * as actions from '../actions';


const Landing = () => <div><h2>heading</h2></div>
const Student = () => <div><h2>Student</h2></div>

class App extends Component {
    componentDidMount() {
        this.props.fetchTodo();
    }

    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <br />
                        <div className="container">
                            <Dashboard />
                            <TodoList />
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};

export default connect(null, actions)(App);