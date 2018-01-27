import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

export class TodoList extends Component {
    renderContent() {
        var renderedRow = [];
        if (this.props.todo.data !== undefined) {
            for (var i = 0; i < this.props.todo.data.length; i++) {
                renderedRow.push(
                    <tr>
                        <td class="cursor-pointer">{this.props.todo.data[i].desc}</td>
                        <td class="cursor-pointer">{this.props.todo.data[i].priority}</td>
                        <td class="cursor-pointer">{this.props.todo.data[i].lastUpdated}</td>
                        <td><button class="button is-outlined is-danger" onClick={this.removeTodo(this.props.todo.data[i]._id)}>REMOVE TODO</button></td>
                    </tr>
                )
            }
            return renderedRow;
        }
    }

    removeTodo(id) {
        console.log(id);
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