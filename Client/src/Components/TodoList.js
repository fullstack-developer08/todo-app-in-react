import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

export class TodoList extends Component {


    renderContent() {
        if (this.props.todo.data !== undefined) {
            const list = this.props.todo.data.map(todo => (
                <tr>
                    <td class="cursor-pointer">{todo.desc}</td>
                    <td class="cursor-pointer">{todo.priority}</td>
                    <td class="cursor-pointer">{todo.lastUpdated}</td>
                    <td><button class="button is-outlined is-danger" onClick={() => this.removeTodo(todo._id)}>REMOVE TODO</button></td>
                </tr>
            ));
            return list;
        }
    }

    removeTodo(id) {
        this.props.removeTodo(id);
    }

    render() {
        return (
            <div>
                <table class="table is-bordered is-striped is-narrow is-hoverable is-fullwidth is-success">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Priority</th>
                            <th>Last Updated</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderContent()}
                    </tbody>
                </table>
            </div>
        );
    }
}

function mapStateToProps({ todo }) {
    return { todo }
}

export default connect(mapStateToProps, actions)(TodoList);